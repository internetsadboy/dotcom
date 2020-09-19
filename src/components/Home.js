import React from 'react';
import Nav from './Nav';

import img from '../images/jl-00-mobile.jpg';



const Styles = {
  p: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
    fontFamily: 'monospace',
    textAlign: 'center',
  },
  center: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    WebkitTransform: 'translate(-50%, -50%)',
    transform: 'translate(-50%, -50%)',
  }
}

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('rendering: Home');
    return (
      <div>
        <Nav route={this.props.route} />
        <div style={Styles.center}>
          <p style={Object.assign({}, Styles.p, { fontSize: 30 })}>
            <span
              style={{fontFamily: 'helvetica', fontWeight: 'bold'}}>
                {`${'my '}`}
            </span>
            <span style={{fontFamily: 'georgia'}}>
              site.
            </span>
          </p>
          <p style={{fontFamily: 'monospace'}}>"jared lamont [dot] com"</p>
        </div>
        <div>
          <p style={Styles.p}></p>
        </div>
        <div style={{position: 'fixed', bottom: 0}}>
          <img style={{maxWidth: '100%', position: 'fixed', bottom: 0}} src={img} />
        </div>
      </div>
    );
  }
}

export default Home;
