import React from 'react';
import Nav from './Nav';

const Styles = {
  layout: {
    position: 'relative',
    top: '50%',
    WebkitTransform: 'translateY(-50%)',
    msTransform: 'translateY(-50%)',
    transform: 'translateY(-50%)',
  },
  parent: {
    WebkitTransformStyle: 'preserve-3d',
    MozTransformStyle: 'preserve-3d',
    transformStyle: 'preserve-3d',
  }
};

class Documentary extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={Styles.parent}>
        <div style={Styles.layout}>
          one
        </div>
        <div style={Styles.layout}>
          two
        </div>
        <div style={Styles.layout}>
          three
        </div>
      </div>
    );
  }
}

export default Documentary;
