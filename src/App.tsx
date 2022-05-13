import React from 'react';
import logo from './logo.svg';
import './App.css';
import myImage from './assets/Images/ReactJs.png';
import myImage1 from './assets/Images/ReactJs2.jpg';
import Content from './components/content';
import myMenu from './components/menu';
import header from './components/header';

function App() {
        return(
          <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <form className="form-inline">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">@</span>
              </div>
              <input type="text" className="form-control" placeholder="Username"></input> 
            </div>
            <input type="password" className="form-control" placeholder="Password"></input>    
          </form>
        </nav>
  );
}

export default App;
