import React, {useState} from "react";
import { useEffect } from "react";
import '../QuestionBox/SingleOption.css'

function SingleOption(props) {
    const [isActive, setIsActive] = useState(false);
    useEffect(() => {
      if (props.inputted) {
          setIsActive(true);
      }
  }, [props.inputted]);
    const handleClick = () => {
        if(!props.isCorrect){
          props.setInputted(true);
        }
        if (!isActive) {
            setIsActive(true);
            if (props.isCorrect) {
                props.setPoints(prevPoints => prevPoints + 1);
            }
        }

      //   if (!props.inputted) {
      //     props.setInputted(true);
      //     setIsActive(true);
      //     if (props.isCorrect) {
      //         props.setPoints(prevPoints => prevPoints + 1);
      //     }
      // }
    };
  return (
    <div>
      <button onClick={handleClick} className={isActive ? (props.isCorrect ? "option-right" : "option-wrong") : "option-none"}>
        {props.text}
      </button>
    </div>
  );
}
export default SingleOption;

