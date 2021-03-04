import React, { Component } from "react";
import dataSet from "../Config/DataSet";
import Answers from "./Answers";
import Question from "./Question";
import QuestionArea from "./QuestionArea";
import ScoresArea from "./ScoresArea";

export class Questionaire extends Component {
  constructor() {
    super();
    this.state = {
      current: 0,
      isFinished: false,
      dataSet: dataSet,
      correct: 0,
      inCorrect: 0,
    };

    this.handleClick = this.handleClick.bind(this);
    this.playAgain = this.playAgain.bind(this);
  }
  handleClick(choice) {
    if (choice == this.state.dataSet[this.state.current].correct) {
      this.setState({
        correct: this.state.correct + 1,
      });
    } else {
      this.setState({
        inCorrect: this.state.inCorrect + 1,
      });
    }

    if (this.state.current != this.state.dataSet.length - 1) {
      this.setState({
        current: this.state.current + 1,
      });
    } else {
      this.setState({
        isFinished: true,
      });
    }
  }


  playAgain(){
    this.setState({
        current : 0,
        correct : 0,
        inCorrect : 0,
        isFinished: false,
      });
  }

  render() {
    return (
      <div>
        <QuestionArea
          handleClick={this.handleClick}
          dataSet={this.state.dataSet[this.state.current]}
          isFinished={this.state.isFinished}
          playAgain = {this.playAgain}
        />
        <ScoresArea
          correct={this.state.correct}
          inCorrect={this.state.inCorrect}
        />
      </div>
    );
  }
}

export default Questionaire;
