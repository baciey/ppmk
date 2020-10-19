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
    const { images, bg } = this.props;

    return (
      <div>
        <div onClick={() => this.setState({ isOpen: true })} className="photo-container">
          <img src={bg} alt="" style={{ width: '100%' }} />
        </div>

        {isOpen && (
          <Lightbox
            imageTitle={"to jest tytuł zdjęcia (opcjonalnie)"}
            imageCaption={"to jest opis zdjęcia asdasd asdasdas dasdasd asd(opcjonalnie)"}
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
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