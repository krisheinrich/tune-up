import React, { Component } from 'react';
import './String.css';

class String extends Component {
  constructor(props) {
    super(props);
    this.resetAudio = this.resetAudio.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  resetAudio() {
    this.audio.pause();
    this.audio.currentTime = 0;
  }
  handleClick() {
    this.audio.play();
    setTimeout(this.resetAudio, 5000);
  }
  render() {
    const { name, src } = this.props;
    return <div className="string">
      <button onClick={this.handleClick}>{ name }</button>
      <audio ref={node => this.audio = node} src={src}
        vol="0.10" autoPlay={false} preload="true" />
    </div>;
  }
}

export default String;
