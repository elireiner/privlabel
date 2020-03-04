import React, { Component } from 'react';
import './item.css'

class Item extends Component{
  render() {
    return(
        <div className="item-image">
            <img alt="image of product here"/>
        </div>
        
    )
  }
}

export default Item;