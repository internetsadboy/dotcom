import React from 'react';
import { Link } from 'react-router-dom';

const Styles = {
  ul: {
    paddingLeft: 0,
    marginBlockStart: 0,
  },
  li: {
    listStyle: 'none',
    padding: 0,
  },
  a: {
    fontFamily: 'helvetica',
    fontWeight: 'bolder',
    fontSize: 47,
    letterSpacing: -2,
    textDecoration: 'none',
  }
};


export default class Nav extends React.Component {
  render() {
    console.log('props.route.path = '+ this.props.route.path)
    let selected = '';
    if(typeof this.props.route.path === 'string') {
      selected = this.props.route.path.split('/').pop();
    }

    return (
      <nav>
        <ul style={Styles.ul}>
          <li style={Object.assign({}, Styles.li,{backgroundColor: 'white', float: 'right', display: 'inline-block'} )}>
            <Link
              to="/biography"
              style={
                Object.assign({}, Styles.a, {
                  color: 'floralwhite',
                  backgroundColor: 'red',
                  fontWeight: 100,
                  height: 86,
              })}>
              biography
            </Link>
          </li>
          <li style={Object.assign({}, Styles.li, {backgroundColor: '#fc24ff'})}>
            <Link
              to="/documentary"
              style={Object.assign({}, Styles.a,
                {color: 'lime', backgroundColor: '#fc24ff',})}>
              DOCUMENTARY
            </Link>
          </li>
          <li style={Styles.li}>
            <Link
              to="/code"
              style={Object.assign({}, Styles.a,
                {color: ' beige', backgroundColor: 'burlywood'})}>
              CODE
            </Link>
          </li>
          <li style={Styles.li}>
            <Link
              to="/35mm"
              style={Object.assign({}, Styles.a,
                {color: 'deeppink', backgroundColor: 'yellow'}
              )}>
              35mm
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
