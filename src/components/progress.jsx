import React from "react";
import styled from 'styled-components';

import GUIDELINE from '../constants';

const ProgressWrapper = styled.div`
  background: ${GUIDELINE.controlsBackgroundColor};
  height: ${GUIDELINE.progressHeight};
`
const ProgressBar = styled.div`
  background: ${GUIDELINE.controlsColor};
  height: 100%;
`

const Progress = props => (
  <ProgressWrapper>
    <ProgressBar style={{ width: props.progress + '%' }} ></ProgressBar>
  </ProgressWrapper>
);

export default Progress;
