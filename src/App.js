import React from 'react';
import ReactDOM from 'react-dom';

const App = props => {
  return <h1>yo {props.name}</h1>
}

ReactDOM.render(
  <App name="babel 7.0" />,
  document.getElementById('root')
);
