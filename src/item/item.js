import React, { Component } from 'react';
import './item.css';
import images from "../images/images"

let img = images.map(({ id, src }) => <img src={src} key={id} />)
class Item extends Component {
  state = {
    img: 0
  }

  componentDidMount() {
    this.intervalID = setInterval(() => {
      this.setState({
        img: this.state.img + 1
      })
    }, 3000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalID)
  }
  
  render() {
    return (
      <div className="item-image">
        {img[this.state.img]}
      </div>

    )
  }
}

export default Item;