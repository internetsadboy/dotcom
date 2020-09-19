import React from 'react';

const style = {
  padding: '16px'
};

export default ({ route }) => (
  <div>
    <div className="ui main text container">
      <div style={style}>
        <p>404: resource not found</p>
      </div>
    </div>
  </div>
);
