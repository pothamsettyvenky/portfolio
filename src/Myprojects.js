import React from 'react'
import './Myprojects.scss'
import AwesomeSlider from 'react-awesome-slider';
import withAutoPlay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css'
import Amazon from './amazon.png'
import photo from './save2.png'
import photo2 from './save.png'
function MyProject() {
    const AutoPlaySlider=withAutoPlay(AwesomeSlider)
    return (
        <div className="Mypoject1" id="myProject_head">
          <h1>My Projects</h1>
        <div className="Myproject_header">
      
        
            <AutoPlaySlider className="slider"
            play={true}
            animation="foldOutAnimation"
            bullets={false}
           buttons={false}
           
           
            >
           
            <div className="card"
            data-src={Amazon}
        />
        
        
        <div className="card" data-src={photo} height="50px"/>
       
        <div className="card" data-src={photo2}/>
            
        
            </AutoPlaySlider>
        </div>
            
        </div>
    )
}

export default MyProject;
