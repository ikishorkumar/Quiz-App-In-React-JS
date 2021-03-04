import React from "react";
import Correct from "./Correct";
import InCorrect from "./InCorrect";

function Scores(props) {
  return (
    <div className="area2">
      <Correct correct={props.correct} />
      <InCorrect InCorrect={props.inCorrect} />
    </div>
  );
}

export default Scores;
