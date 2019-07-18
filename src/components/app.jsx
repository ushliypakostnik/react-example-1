import React, { Component, Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

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
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

const Image = styled.div`
  @media only screen and (orientation: portrait) {
    height: calc(100vh - ${GUIDELINE.progressHeight});
    width: calc(33/49 * 100vmax);
    background: url(${portrait}) 50% 50% no-repeat;
    background-size: contain;
  }

  @media only screen and (orientation: landscape) {
    width: calc(129/77 * calc(100vh - ${GUIDELINE.progressHeight}));
    height: calc(100vh - ${GUIDELINE.progressHeight});
    background: url(${landscape}) 50% 50% no-repeat;
    background-size: contain;
  }
`

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0,
      stop: false,
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

  render() {
    const { progress, stop } = this.state;

    return (
      <Fragment>
        <GlobalStyle />
        <PageWrapper>
          <ImageWrapper>
            <Image />
          </ImageWrapper>
          <Progress progress={progress} />
          { stop && <Close onClick={this.start} /> }
        </PageWrapper>
      </Fragment>
    );
  }
}

export default App;
