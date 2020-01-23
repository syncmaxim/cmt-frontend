import React from "react";

const styles = {
  main: {
    width:'100%',
    padding: '10px 0',
    color: 'red',
    fontSize: '12px'
  }
};

const ErrorHandler = props => (<div style={styles.main}> {props.children} </div>);

export default ErrorHandler;
