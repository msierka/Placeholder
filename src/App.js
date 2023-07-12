import React from 'react';
import { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    users: ["s"]
  }

  componentDidMount(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET','https://jsonplaceholder.typicode.com/users',true);
    xhr.onload =  () => {
      //console.log(xhr.status)
      if(xhr.status === 200){
        const users = JSON.parse(xhr.responseText)
        console.log(users)
        this.setState({users});
      }
      
    }
    xhr.send(null);

  }
  render(){
  return (
    <div className="App">
      ok
    </div>
  );
}
}

export default App;
