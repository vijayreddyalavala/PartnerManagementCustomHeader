import React from 'react';
import './style.css';

export default function HocPMHeader(inputComponent) {
  return (props) => {
    return <inputComponent {...props} />;
  };
}
