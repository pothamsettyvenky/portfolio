import React from 'react'
import './portfolio.scss'
import images from './save.png';
import Portfoliolist from './portfoliolist';
import {Html,Django,React_js} from "./data";
function Testomonials() {
    const[data,setData]=React.useState([]);
    const [selected,setSelected]=React.useState('Html/css');
    const list=[
        {
            id:"Html/css",
            title:"Html/Css",
        },
        {
            id:"Django",
            title:"Django",
        },
        {
            id:"React_js",
            title:"React_js",
        },

    ]
      React.useEffect(() => {
          switch(selected) {
              case "Html/css":
                setData(Html);
                break;
              case "Django":
                    setData(Django);
                    break;
               case "React_js":
                    setData(React_js);
                    break;
          }

      }, [selected])
    
    return (
        <div className="testomonials_header" id="portfolio_head">
           <h1>My Portfolio</h1>
           
           <div className="About_left_header">
        
            <ul>
                {list.map(item=>(
                    <Portfoliolist 
                    title={item.title} 
                    active={selected===item.id} 
                    setSelected={setSelected} 
                    id={item.id}/>
                ))}

            </ul>
            <div className="Imagess_headers">
            {data.map(d=>(
                <div className="headerings">
                <img src={d.img} alt="" height="250"/>
                <div className="mainss">
                <h3 className="hello">{d.title}</h3>
                <h2 className="hello">{d.description}</h2>
                <h3 className="hello">{d.createdBy}</h3></div>
                
            </div>
            ))} 
                       </div>
   
           </div>
        </div>
    )
}

export default Testomonials
