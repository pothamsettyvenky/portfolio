import './App.scss';
import React, {useState} from 'react';
import Header from './header';
import Home1 from './home';
import About from './about';
import Myproject from './Myprojects'
import Contactus from './Contactus'
import Portfilio from './portfolio'
import Menu from './menu';
function App() {
  const [menuopen,setmenuopen]=useState(false);
  return (
    <div className="app">
    <Header menuopen={menuopen} setmenuopen={setmenuopen}/>
    <Menu menuopen={menuopen} setmenuopen={setmenuopen}/>
    <div className="sections">
   
   
     <Home1/>
     <About/>
     <Portfilio/>
     <Myproject/>
     <Contactus/>
    </div>
   
    
    </div>
  );
}

export default App;
