import React from 'react';

const AnimatedButton = ({message,direction}) =>{
  return(

    <div className="ui animated button">
      <div className="visible content">{message}</div>
        <div className="hidden content">
          <i className={`${direction} arrow icon`}></i>
        </div>
      </div>

  );
};
export default AnimatedButton;
