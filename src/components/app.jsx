import React, { Component, Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import ReactResizeDetector from 'react-resize-detector';

import GUIDELINE from '../constants';

import portrait from '../images/portrait.png';
import landscape from '../images/landscape.png';

import Progress from './progress';
import { Close } from './icons';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    color: white;
    background-color: gray;
  }
`
const PageWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
`
const ImageWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`

const Img = styled.img`
  max-width: 100%;
  max-height: calc(100vh - ${GUIDELINE.progressHeight});
`

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0,
      stop: false,
      orientation: null,
    };
  }

  loop = () => {
    this.interval1 = setInterval(() => {
      if (this.state.progress === 100) {
        this.setState({ stop: true });
        clearTimeout(this.interval1);
      } else {
        this.setState({ progress: this.state.progress + 1 });
      }
    }, GUIDELINE.animationSpeed);
  }

  componentDidMount() {
    this.loop();
  }

  start = () => {
    this.setState({ progress: 0, stop: false });
    this.loop();
  }

  isPortrait() {
    if (window.matchMedia("(orientation: portrait)").matches) {
      return true;
    } else return false;
  }

  render() {
    const { progress, stop, orientation } = this.state;

    return (
      <Fragment>
        <GlobalStyle />
        <ReactResizeDetector handleHeight handleWidth onResize={ this.onResize } />
        <PageWrapper>
          <ImageWrapper>
            <Img src={ orientation ? portrait : landscape } alt="image-for-test" />
          </ImageWrapper>
          <Progress progress={ progress } />
          { stop && <Close onClick={ this.start } /> }
        </PageWrapper>
      </Fragment>
    );
  }

  onResize = () => {
    this.setState({ orientation: this.isPortrait() });
  }
}

export default App;
