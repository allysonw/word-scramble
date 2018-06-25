import React from 'react';

const Score = (props) => {

  // format the date of the high score
  const date = new Date(props.score.created_at);
  let dateString = (date.getMonth() + 1).toString() + "/";
  dateString += date.getDate().toString() + "/";
  dateString += date.getFullYear().toString().slice(-2);

  return (
    <tr className="Score" >
      <td>{props.score.player}</td>
      <td>{props.score.value}</td>
      <td>{dateString}</td>
    </tr>
  );
}

export default Score;
