import React, { Component, Fragment } from 'react';
import '../css/Background.css';

class Background extends React.Component{
  render(){
    return(
      <div className="bg-block">
      <div className="bg-before">
      </div>
      <div className="bg">
      </div>
      <div className="bg-after">
      </div>
    </div>
    )
  }
}

export default Background;
