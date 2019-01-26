import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestDog } from './redux/dog/actions';
import { requestCat } from './redux/cat/actions';
class App extends Component {
  componentDidMount() {
    const { getRandomDogImage, getRandomCatImage } = this.props;
    getRandomDogImage();
    getRandomCatImage();
  }
  changeDog = () => {
    const { getRandomDogImage } = this.props;
    getRandomDogImage();
  };
  changeCat = () => {
    const { getRandomCatImage } = this.props;
    getRandomCatImage();
  };
  render() {
    const {
      dogReducer: { url: dogUrl, isLoading: dogisLoading },
      catReducer: { url: catUrl, isLoading: catIsloading }
    } = this.props;
    return (
      <React.Fragment>
        <div className="dogContainer">
          <button onClick={this.changeDog}>Change Image of Dog</button>
          {dogisLoading && <p>Loading .... </p>}
          <div>
            <img src={dogUrl} alt="" />
          </div>
        </div>
        <div className="dogContainer">
          <button onClick={this.changeCat}>Change Image of Cat</button>
          {catIsloading && <p>Loading .... </p>}
          <div>
            <img src={catUrl} alt="" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(
  state => state,
  {
    getRandomDogImage: requestDog,
    getRandomCatImage: requestCat
  }
)(App);
