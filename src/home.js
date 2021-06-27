import React,{useState,useEffect,useRef} from 'react'
import Image from './img.png'
import './home.scss';
import venky from './venky.jpg'
import {init} from "ityped";
function Home() {
  const textRef=useRef();
    useEffect(()=>{
       init(textRef.current,{
           showCursor:false,
           typeSpeed:200,
           backDelay:1500,
           backSpeed:60,
           showCursor:true,
           strings:["Web-Developer","App-Developer","Vedio-Maker"]
       })
    },[])
    return (
        <div className="image_header" id="home_head">
        <div className="left">
        <div  className="img_header">
            <img src={venky} alt=""/>
        </div>
        </div>
        <div className="right">
            <div className="right_wrap">
                <h2>Hello I am</h2>
                <h1>VENKATESH POTHAMSETTY</h1>
                <h3>Suited for <span ref={textRef}></span></h3>
            </div>
        </div>
      
            
        </div>
    )
}

export default Home;
