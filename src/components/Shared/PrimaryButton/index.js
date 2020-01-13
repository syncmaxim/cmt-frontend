import React from "react";
import PropTypes from 'prop-types'
import './index.css'

const PrimaryButton = (props) => (
  <div className='primary-button-block'>
    <button onClick={props.onClick} disabled={props.disabled}>{props.text}</button>
  </div>
);

PrimaryButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};

export default PrimaryButton;
