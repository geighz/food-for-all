import React from 'react';

const AnimatedButton = ({message}) =>{
  return(
  <div>
    <div className="ui animated button">
      <div className="visible content">{message}</div>
        <div className="hidden content">
          <i className="right arrow icon"></i>
        </div>
      </div>
    </div>
  );
};
export default AnimatedButton;
