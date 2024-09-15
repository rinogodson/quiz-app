import React from "react";

function SingleOption(props) {
    const [isActive, setIsActive] = React.useState(false);
  return (
    <div>
      <button onClick={() => {
        setIsActive(true)
        if(props.isCorrect) {
            props.setPoints(props.points + 1)
        }
      }} style={{ backgroundColor: isActive ? (props.isCorrect ? "green" : "red") : "white" }}>
        {props.text}
      </button>
    </div>
  );
}
export default SingleOption;
