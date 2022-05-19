import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {remark} from 'remark';
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(),'posts')

export function getSortedPostsData() {
	//get filenames from posts directory
	const fileNames = fs.readdirSync(postsDirectory);
	//gets filenames ...readdirSync with arguments of a directory
	const allPostsData = fileNames.map ((filename)=>{
		//remove 'md' from filename
		const id = filename.replace(/\.md$/,'')

		//read markdown file as a string
		const fullpath = path.join(postsDirectory,filename)
		//aah here filename still contains the .md extension .. in getPostsData below we have to add it (.md) because we are working wih and id(the filename wit no extensions) to start with
		//must have encoding parameter or it will return a buffer object full of hex
		const fileContents = fs.readFileSync(fullpath,'utf8')
		//here is where gray matter parses out the metadata and calls it data.The rest of the file is <content></content>
		const matterResult = matter(fileContents)
		//testing the gray mater return values its data for metadata and content for the string containing ...content.
		// console.log({...matterResult})

		return{
			id,
			...matterResult.data
		}
	})	

	return allPostsData.sort(({date:a},{date:b}) =>{
		if(a<b){
			return 1;
	
		} else if(a>b){
			return -1;
		
		} else {
			return 0;
		}
	}
	)
};

export function getAllPostsIds(){

	const fileNames = fs.readdirSync(postsDirectory)

	return fileNames.map((fileName)=> {
		return {
			params:{
				id:fileName.replace(/\.md$/,'')
			}
		}

	})
}

export async function getPostData(id){
	//will call this function in getStaticProps and pass it the argument of id..

	const fullpath = path.join(postsDirectory,`${id}.md`)
	const fileContent = fs.readFileSync(fullpath,'utf8')
	const matterResult = matter(fileContent)
	const processedContent = await remark().use(html).process(matterResult.content)
	const contentHTML =processedContent.toString()
	
	return{
		id,
		contentHTML,
		...matterResult.data
	}
}