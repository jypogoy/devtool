import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Route, NavLink, HashRouter } from 'react-router-dom';

import Home from './view/Home';
import Projects from './view/Projects';
import Stuff from './view/Stuff';
import Contact from './view/Contact';

// import Counter from './components/Counter'
// import store from './store/'

// import Posts from './components/Posts';
// import PostForm from './components/PostForm';

class App extends Component {
  
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <HashRouter>
          <div className="App">        
            <div>
              <h1>DevTool</h1>
              <ul className="header">
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/projects">Projects</NavLink></li>
                <li><NavLink to="/stuff">Stuff</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
              </ul>
              <div className="content">
                <Route exact path="/" component={Home} />
                <Route path="/projects" component={Projects} />
                <Route path="/stuff" component={Stuff} />
                <Route path="/contact" component={Contact} />
              </div>
            </div>
          </div>      
        </HashRouter>    
      );        
    }
}

export default App;
