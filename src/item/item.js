import React, { Component } from 'react';
import './item.css';
import images from "../images/images"
class Item extends Component{
  render() {
    return(
        <div className="item-image">
            {images.map(img => <img key={img.id}/>)}
        </div>
        
    )
  }
}

export default Item;