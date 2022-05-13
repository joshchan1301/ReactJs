import React from 'react';
import myImage from '../../assets/Images/ReactJs.png';
import myImage1 from '../../assets/Images/ReactJs2.jpg';
const Content = () => {
    return(
        <div className="App">
        <h1>WELCOME TO OUR REACT TYPESCRIPT COURSE</h1> 
        <img src ={myImage}/>
        <img src ={myImage1}/>
      </div>
    )
}

export default Content;