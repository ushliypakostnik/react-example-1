import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';

import GUIDELINE from '../constants';

const Icon = styled.a`
  position: absolute;
  top: 0;
  right: 0;
  color: ${GUIDELINE.controlsColor};
  background: ${GUIDELINE.controlsBackgroundColor};
  width: ${GUIDELINE.iconSize};
  height: ${GUIDELINE.iconSize};
`

export const Close = ({ onClick }) => (
  <Icon
    href="#"
    onClick={onClick}
    >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      focusable="false">
      <polygon
        fill="#FFFFFF"
        points="87.246,16.412 83.711,12.877 50.123,46.465 16.535,12.877 13,16.412 46.588,50 13,83.588
        16.535,87.123 50.123,53.535 83.71,87.123 87.246,83.588 53.658,50 "/>
    </svg>
  </Icon>
);

Close.propTypes = {
  onClick: PropTypes.func.isRequired
};

const Icons = {
  Close,
}

export default Icons;
