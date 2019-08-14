import React from "react"
import { css } from "@emotion/core";
import PropTypes from "prop-types"

const getHeaderElement = ({h1, h2, h3, h4, h5, h6}) => {
  if (h1) {
    return 'h1';
  }
  if (h2) {
    return 'h2';
  }
  if (h3) {
    return 'h3';
  }
  if (h4) {
    return 'h4';
  }
  if (h5) {
    return 'h5';
  }
  if (h6) {
    return 'h6';
  }

  return h3;
}

const Header = (props) => {
  const H = getHeaderElement(props);
  const { children, className } = props;

  return (
    <H css={css`
      font-family: Raleway, sans-serif;
      font-size: 32px;
    `} className={className}>
      {children}
    </H>
  )
}

Header.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  h1: PropTypes.bool,
  h2: PropTypes.bool,
  h3: PropTypes.bool,
  h4: PropTypes.bool,
  h5: PropTypes.bool,
  h6: PropTypes.bool,
}

export default Header