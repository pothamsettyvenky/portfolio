import React ,{useState} from 'react'
import './header.scss';
function Header( {menuopen,setmenuopen}) {
    
    return (
        <div className={"header "+(menuopen &&"active")}>
        <div className="mainn">
        <div className="name_header">
            <h3>Venkatesh</h3>
        </div>
        </div>
        
       
        
        <div className="sub_header ">
        <div className="hamburger" onClick={()=>setmenuopen(!menuopen)}>
            <span className="one"></span>
            <span className="two"></span>
            <span className="three"></span>
        </div>
           
        </div>
            
        </div>
    )
}


export default Header
