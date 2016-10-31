import React from 'react';
import ReactDOM from 'react-dom';
// import Component from './Component';
import SmartGesture from './SmartGesture';

window.onload = () => {
  ReactDOM.render(
    <SmartGesture />,
    document.querySelector('#container')
  );
};
