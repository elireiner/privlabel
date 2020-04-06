import React, { Component } from 'react';
import './item.css';
import images from "../images/images"

let imgArray = images.map(({ src, id }) => { return { src, id } })
console.log(imgArray)
class Item extends Component {
  state = {
    img: 0
  }

  componentDidMount() {
    this.intervalID = setInterval(() => {
      if (this.state.img < imgArray.length -1) {
        this.setState({
          img: this.state.img + 1
        })
      } else {
        this.setState({
          img: 0
        })
      }
    }, 2000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalID)
  }

  render() {
    return (
      <div className="item-images">
        <img
          className="item-image"
          src={imgArray[this.state.img].src}
          key={imgArray[this.state.img].id}
          alt="image of the product"
        />
      </div>

    )
  }
}

export default Item;