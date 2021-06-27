import React from 'react'
import './about.scss'
import image from './immm.png'
import LaptopIcon from '@material-ui/icons/Laptop';
import StorageIcon from '@material-ui/icons/Storage';
import htimage from './save.png'
import { Tab,Tabs,TabList,TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import Portfoliolist from './portfoliolist';
import {Html,Django,React_js} from "./data";
function About() {
    const Front_end=[
        { id:1,
            feild:"ReactJs",
        
        },{ id:1,
            feild:"Html5",
        
        },
        { id:1,
            feild:"Css3",
        
        },
        { id:1,
            feild:"JavaScript",
        
        },
        { id:1,
            feild:"BootStrap",
        
        }

    ]
    return (
        <div className="About1" id="about_head">
        <div className="About_header">
            <div className="image">
                <img src={image} alt="" className="image_header1"/>
                
            </div>
            <div className="remainngs">
                
            <h1 className="name">POTHAMSETTY VENKATESH</h1>
           
           <h1 className="aboutme">About Me</h1>
       
          <p className="Aboutt">    I <strong>P.VENKATESH</strong> and i am graduated in the year 2021 august and i am very passionate at <strong>Web developing</strong> and the <strong>App developing</strong> and i am capable of creating the <strong>responsive websites</strong> and i think i will be a good beliver employ and i had created the responsive website by using the <strong>html css scss and php and js too and i am intermediate at React Js and begginer at React Native</strong>  and i am team member too .<br/><br/>                  I had mainly using the React Native for App building and i created the app like Gym App which is under proces and i had got made a<strong>AMAZON Clone</strong>  by using the <strong>React Js and css</strong> and i had a little bit knowledge on <strong>MERN STACK</strong>  </p>
            </div>

           
           
            
        </div>
             
        <div className="left">
               
                   <h1>My Skill Set</h1>
                   <p>Languages </p>
                   <div className="skills">
                       <div className="Front-end">
                       <LaptopIcon className="icons"/>
                       <div className="underline"></div>
                           
                           <ul>
                           <h3>Front-end</h3>
                              {Front_end.map(item=>(
                                <li>{item.feild}</li>
                              ))}
                           </ul>
                       </div>
                       <div className="Front-end">
                       <StorageIcon className="icons"/>
                       <div className="underline"></div>
                           
                           <ul>
                           <h3>Back-end</h3>
                               <li>FireBase</li>
                               <li>Sql</li>
                               <li>MangoDb</li>
                               
                           </ul>
                       </div>
                       
                       <div className="Front-end">
                       <LaptopIcon className="icons"/>
                       <div className="underline"></div>
                          
                           <ul>
                           <h3>Tools</h3>
                               <li>Vscode</li>
                               <li>Net-Beans</li>
                               <li>GitHub</li>
                               <li>PostMan</li>
                           </ul>
                       </div>
                   </div>
               </div>
           
            
        </div>
            
      
    )
}

export default About;
