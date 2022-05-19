import "../styles/global.css"

import {useState} from "react"
export default function App({Component, pageProps}){
	const [myNumber,setMyNumer] = useState(3)
	
	const increaseCount = ()=>{
		setMyNumer(1+myNumber)
	};

	return <Component {...pageProps} MyNumber={myNumber} increaseCount={increaseCount}/>
}