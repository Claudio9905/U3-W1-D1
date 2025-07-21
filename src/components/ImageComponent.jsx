import { Component } from "react";

class ImageComponent extends Component {
  render() {
    return (
      <>
        <img className="img-animal" src={this.props.src} alt={this.props.alt} />
      </>
    );
  }
}

export default ImageComponent;
