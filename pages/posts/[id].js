import Layout from '../../components/layout'
import Date from '../../components/date'
import { getAllPostsIds, getPostData } from '../../lib/posts'
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css'

export default function Posts({postData}){
	return(
		<Layout>
			<Head>
				<title>{postData.title}</title> 
			</Head>
		
			<article>
				<h1 className={utilStyles.headingXl}>{postData.title}</h1>
				<br />
				{postData.id}
				<br />
				<div className={utilStyles.lightText}>
					<Date dateString={postData.date}></Date>
				</div>
				<br />
				<div dangerouslySetInnerHTML={{__html:postData.contentHTML}} />
		
			</article>
		</Layout>
	)
}

export async function getStaticPaths(){
	const paths = getAllPostsIds();

	return(
		{	paths,
			fallback:false
		}
		)
	
}

export async function getStaticProps({params}){

	const postData =await getPostData(params.id)
	return{
		props:{postData}
	}
}