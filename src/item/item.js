import React, { Component } from 'react';
import './item.css'

class Item extends Component{
  render() {
    return(
        <div className="item-image">
            <img src="https://images-na.ssl-images-amazon.com/images/I/918NAFLIXHL._AC_SX355_.jpg" alt="image of product here"/>
        </div>
        
    )
  }
}

export default Item;