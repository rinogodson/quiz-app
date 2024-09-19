import React from "react";
import SingleOption from "../QuestionBox/SingleOption";
import '../QuestionBox/QuestionBox.css'
function QuestionBox(props) {
  return <div>
    <h1 className="question">{(props.qsNumber+1) + ". " + props.qn.question}</h1>
    <div className="options">
    {props.qn.options.map((option) => (
      <SingleOption
      key={option}
      text={option}
      setPoints={props.setPoints}
      points={props.points}
      isCorrect={option === props.qn.correctAnswer}
      qsNumber={props.qsNumber}
      
      setInputted={props.setInputted}
      inputted={props.inputted}
      />
    ))}
    </div>
  </div>;
}

export default QuestionBox;
