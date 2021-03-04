import React from "react";
import dataSet from "../Config/DataSet";
import Answer from "./Answer";

function Answers(props) {
    let options = [];
    for(let i=0;i < props.dataSet.answers.length ; i++){
        options.push(<Answer choice={props.dataSet.answers[i]} handleClick={props.handleClick} answer={props.dataSet.answers[i]} />)
    }
  return (
    <div>
      <h4>{options}</h4>
    </div>
  );
}

export default Answers;
