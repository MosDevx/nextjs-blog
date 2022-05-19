first tutorial in nextjs site building a simple blog 07/05/22


Things ive read that were tricky.

awesome example of file manipulation in /lib/posts.js.
	get all filenames with fs.readdirSync(path)
	use regex replacement to have id that correspond to filenames without id
	use path to create the fullpath to a file.
	use readFileSync to get the file as a string



	some libraries used remark(render markdown content),remark-html and gray-matter(to parse YAML front matter),date-fns (to format date well)