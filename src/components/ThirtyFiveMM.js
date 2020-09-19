import React from 'react';
import Nav from './Nav';

import imgs from '../utils/img-loader-35';
console.info(imgs)

class ThirtyFiveMM extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Nav route={this.props.route} />
        <ul>
          {imgs.map((img, i) => {
            return
            (
              <li key={i}>
                <img src={img} />
              </li>
            )
          })}
        </ul>

      </div>
    );
  }
}

export default ThirtyFiveMM;
