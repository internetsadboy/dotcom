import React from 'react';
import Nav from './Nav';

import img_bio from '../images/NAM-FOUND-PABLO-2413.jpg';
import gif_tv from '../images/gif/tv-error.gif';
import gif_heart from '../images/gif/heart.gif';
import gif_stickman from '../images/gif/stickfigure-walking.gif';
import gif_meatboy from '../images/gif/meatboy.gif';

const Styles = {
  wrapper: {
    marginBottom: 20,
    textAlign: 'center',
  },
  h1: {
    fontSize: 'xxx-large',
    fontFamily: 'times new roman',
    fontWeight: 'bold',
    letterSpacing: -4,
    textAlign: 'center',
    margin: 0,
    marginBottom: 10,
  },
  ul: {
    marginBlockStart: -13,
    marginInlineStart: 26,
    margin: 'auto',
    maxWidth: 240,
  },
  li: {
    fontFamily: 'monospace',
    fontSize: 14,
    padding: '10px 0',
    paddingLeft: 5,
    listStyle: 'mongolian',
    textAlign: 'left',
  },
  img: {
    maxWidth: 300,
    padding: '1em'
  },
  est1990: {
    fontFamily: 'helvetica',
    fontWeight: 'bolder',
    letterSpacing: -1,
    textAlign: 'left',
    backgroundColor: 'yellow',
  },
  oct6: {
    fontFamily: '"Times New Roman",Times,serif',
    textDecoration: 'none',
  }
}

class Biography extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // {marginTop: 55, marginBottom: 45}
    // {maxWidth: '100%'}
    return (
      <div>
        <Nav route={this.props.route} />
        <div style={
          {
            margin: 'auto',
            marginBottom: 20,
            marginTop: 35,
            maxWidth: 300,
            textAlign: 'center',
          }
        }>
          <img
            src={img_bio}
            style={{ maxWidth: 300 }}
          />
        </div>
        <div style={
          {
            margin: 'auto',
            marginBottom: 20,
            marginTop: 0,
            maxWidth: 300,
            textAlign: 'center',
          }
        }>
          <h1 style={Styles.est1990}>est. 1990</h1>
          <a href="https://en.wikipedia.org/wiki/October_6#Events" style={Styles.oct6}>6, October</a>
        </div>
        <div style={Styles.wrapper}>
          <p>
            jared is an aspiring filmmaker with a background in computer programming.
          </p>
        </div>
        <div style={Styles.wrapper}>
          <h1 style={Styles.h1}>STYLE</h1>
          <ul style={Styles.ul}>
            <li style={Object.assign({}, Styles.li, {listStyle: 'decimal'})}>unorthodox/experimental</li>
            <li style={Object.assign({}, Styles.li, {listStyle: 'decimal'})}>documentary</li>
            <li style={Object.assign({}, Styles.li, {listStyle: 'decimal'})}>practical</li>
          </ul>
        </div>
        <div style={Styles.wrapper}>
          <h1 style={Styles.h1}></h1>
        </div>
        <div style={Styles.wrapper}>
          <h1 style={Styles.h1}>LANGUAGES</h1>
          <ul style={Styles.ul}>
            <li style={Styles.li}>english</li>
            <li style={Styles.li}>french</li>
            <li style={Styles.li}>bahasa</li>
            <li style={Styles.li}>nepali</li>
            <li style={Styles.li}>mongolian</li>
          </ul>
        </div>
        <div style={{marginBottom: 100, margin: 'auto', textAlign: 'center'}}>
          <img src={gif_tv} style={{maxWidth: 300}}/>
        </div>
        <div style={Styles.wrapper}>
          <img src={gif_heart} style={{maxWidth: 40}} />
          <img src={gif_stickman} style={{maxWidth: 100}} />
          <img src={gif_meatboy} style={{maxWidth: 50}} />
        </div>
      </div>
    );
  }
}

export default Biography;
