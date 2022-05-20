import Link from "next/link"
import Head from "next/head"
import Script from "next/script"
import Layout from "../../components/layout"
export default function  FirstPost(props){
	return (
		<Layout home>
			<Head>
				<title>First Posts</title>
			</Head>
			{/* <Script
				src="https://connect.facebook.net/en_US/sdk.js"
				strategy="lazyOnload"
				onLoad={()=>console.log("Script is loaded")}
				>
			</Script> */}

			<div className="title">
			<h2>Welcome to My first post {props.MyNumber}</h2>
			<button onClick={props.increaseCount}>Click me</button>
			<Link href ="/">
				<a> Go to Home page</a>
			</Link>
			<br />
			<br />
			</div>
		</Layout>



	)
}