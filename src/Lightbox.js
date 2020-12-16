import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app


export default class LightboxExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    const { project } = this.props;
    

    const images = project.images.map(image => image)

    return (
      <div>
        <div onClick={() => this.setState({ isOpen: true })} className="photo-container">
          <img src={project.thumbnail} alt="" style={{ width: '100%' }} />
        </div>

        {isOpen && (
          <Lightbox
            imageTitle={images[photoIndex].title}
            imageCaption={images[photoIndex].desc}
            mainSrc={images[photoIndex].img}
            nextSrc={images[(photoIndex + 1) % images.length].img}
            prevSrc={images[(photoIndex + images.length - 1) % images.length].img}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}