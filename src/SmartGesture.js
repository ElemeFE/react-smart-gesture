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
  static propTypes = {
    style: React.PropTypes.object,
  };

  componentDidMount() {
    const userOptions = {...this.props.options};
    delete userOptions.el;
    delete userOptions.onGesture;
    const options = {
      el: this.refs.smartGestureDrawingArea,
      timeDelay: 0,
      onGesture: (res, points) => {
        if (this.props.onGesture) this.props.onGesture(res, points);
        // document.getElementById('result').innerHTML = res.score > 2 ? res.name : '未识别';
      },
      ...userOptions,
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
    if (!this.props.children) {
      return <div ref="smartGestureDrawingArea" {...this.props} style={{...singleNodeStyle, ...this.props.style}} />
    }

    return (
      <div ref="smartGestureDrawingArea" {...this.props} style={{...defaultStyle, ...this.props.style}}>
        { this.props.children }
      </div>
    );
  }
}

export default SmartGesture;
