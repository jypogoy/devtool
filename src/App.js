import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import Counter from './components/Counter'
// import store from './store/'

// import Posts from './components/Posts';
// import PostForm from './components/PostForm';

import PostList from './components/PostList';

class App extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        data: [{
          name: 'Tanner Linsley',
          age: 26,
          friend: {
            name: 'Jason Maurer',
            age: 23,
          }
        }],
        
      }
    }

    render() {
      return (
        <div className="App">        
          <PostList dataUrl="https://jsonplaceholder.typicode.com/posts"/>
        </div>          
      );        
    }
}

export default App;
