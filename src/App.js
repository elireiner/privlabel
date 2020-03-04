import React, { Component } from 'react';
import NavBar from './navBar/navBar';
import Item from './item/item';
import Story from './story/story';

class App extends Component{
  render() {
    return(
      <>
      <NavBar/>
      <Item/>
      <Story/>
      </>

    )
  }
}

export default App;