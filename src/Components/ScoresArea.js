import React from "react";
import Scores from "./Scores";

function ScoresArea(props) {
  return (
    <div className="area">
      <h3>Scores Area</h3>
      <Scores correct={props.correct} inCorrect={props.inCorrect} />
    </div>
  );
}

export default ScoresArea;
