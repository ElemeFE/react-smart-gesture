import React from 'react';
import smartGesture from 'smart-gesture';

const defaultStyle = {
  position: 'relative',
  display: 'inline-block',
};

const singleNodeStyle = {
  position: 'relative',
  width: 500,
  height: 300,
  background: '#eee',
};

class SmartGesture extends React.Component {
  componentWillMount() {
    this.userOptions = this.props.options;
  }
  componentDidMount() {
    const options = {
      ...this.userOptions,
      el: this.refs.smartGestureDrawingArea,
      timeDelay: 0,
    };

    this.gesture = new smartGesture(options);
  }

  addGesture(gesture) {
    this.gesture.addGesture(gesture);
  }

  refresh(options) {
    this.gesture.refresh(options);
  }

  destroy() {
    this.gesture.destroy();
  }

  render() {
    const divProps = Object.assign({}, this.props);
    delete divProps.options;

    if (!this.props.children) {
      return <div ref="smartGestureDrawingArea" {...divProps} style={{...singleNodeStyle, ...this.props.style}} />
    }

    return (
      <div ref="smartGestureDrawingArea" {...divProps} style={{...defaultStyle, ...this.props.style}}>
        { this.props.children }
      </div>
    );
  }
}

SmartGesture.propTypes = {
  style: React.PropTypes.object,
};

export default SmartGesture;
