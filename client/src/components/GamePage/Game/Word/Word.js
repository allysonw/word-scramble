import React from 'react';

const Word = (props) => {
  return (
    <div className="Word" >
      {props.word.letters}
    </div>
  );
}

export default Word;
