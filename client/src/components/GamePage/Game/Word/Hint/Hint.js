import React from 'react';

const Hint = (props) => {
  return (
    // Check props for what CSS to use
    <div>
      HINT: {props.definition}
    </div>
  );
}

export default Hint;
