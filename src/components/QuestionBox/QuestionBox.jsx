import React from "react";
import SingleOption from "../QuestionBox/SingleOption";
function QuestionBox(props) {
  return <div>
    <h1>{(props.qsNumber+1) + ". " + props.qn.question}</h1>
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
  </div>;
}

export default QuestionBox;
