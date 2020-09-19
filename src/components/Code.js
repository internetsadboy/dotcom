import React from 'react';
import Nav from './Nav';

class Code extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Nav route={this.props.route} />
        code
      </div>
    );
  }
}

export default Code;
