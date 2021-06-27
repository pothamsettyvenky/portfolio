import React from 'react'
import './portfolliolist.scss'
function Portfoliolist({title,active,setSelected,id}) {
    return (
        <li className={active?"portfolliolist active":"portfolliolist"} onClick={()=>setSelected(id)}>
            {title}
        </li>
    )
}

export default Portfoliolist;
