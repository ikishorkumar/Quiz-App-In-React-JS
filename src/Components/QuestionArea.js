import React from 'react'
import Answers from './Answers'
import Question from './Question'

function QuestionArea(props) {
    
    if (props.isFinished) {
        return (
        <div className="area">
            <h2>Thanks For Playing Quiz</h2>
            <br/>
            <button onClick={()=>{
                props.playAgain();
            }}>Play Again</button>
        </div>
        )
    }
    return (
        <div className="area">
            <h3>Question Area</h3>
            <Question dataSet={props.dataSet}/>
            <Answers handleClick={props.handleClick} dataSet={props.dataSet}/>
        </div>
    )
}

export default QuestionArea
