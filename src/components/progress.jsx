import React from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';

import GUIDELINE from '../constants';

const ProgressWrapper = styled.div`
  background: ${GUIDELINE.controlsBackgroundColor};
  height: ${GUIDELINE.progressHeight};
`
const ProgressBar = styled.div`
  background: ${GUIDELINE.controlsColor};
  height: 100%;
`

const Progress = ({ progress }) => (
  <ProgressWrapper>
    <ProgressBar style={{ width: progress + '%' }} ></ProgressBar>
  </ProgressWrapper>
);

Progress.propTypes = {
  progress: PropTypes.number.isRequired
};

export default Progress;
