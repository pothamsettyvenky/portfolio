import React from 'react'
import './menu.scss'
function Menu({menuopen,setmenuopen}) {
    const close=()=>{
        setmenuopen(false);
    }
    return (
        <div className={"Menu "+(menuopen && "active")}>
       <ul>
       <li onClick={()=>close()}>
           <a href="#home_head">Intro</a>
           </li>
           <li onClick={()=>close()}>
           <a href="#about_head">About_me</a>
           </li>
           <li onClick={()=>close()}>
           <a href="#portfolio_head">Portfolio</a>
           </li>
           <li onClick={()=>close()}>
           <a href="#myProject_head">MyProjects</a>
           </li>
           <li onClick={()=>close()}>
           <a href="#contactus_head">Contact</a>
           </li>
       </ul>
            
        </div>
    )
}

export default Menu;
