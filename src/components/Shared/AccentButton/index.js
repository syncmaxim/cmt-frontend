import React from "react";
import PropTypes from "prop-types";
import './index.css'

const AccentButton = (props) => (
  <div className='accent-button-block'>
    <button onClick={props.onClick} disabled={props.disabled}>{props.text}</button>
  </div>
);

AccentButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};

export default AccentButton;
