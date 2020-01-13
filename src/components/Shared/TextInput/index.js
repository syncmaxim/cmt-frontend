import React from "react";
import PropTypes from 'prop-types'
import './index.css'

const TextInput = (props) => (
  <div className='input-field'>
    <div className='input-field-label'> {props.label} </div>
    <input type={props.type} name={props.name} placeholder={props.placeholder} value={props.value} onChange={props.onChange} />
  </div>
);

TextInput.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  label: PropTypes.string
};

export default TextInput;
