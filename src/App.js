import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
import routes from './routes';

const App = props => {
  return (
    renderRoutes(routes)
  )
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
