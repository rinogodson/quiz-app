import React from 'react'
import { useParams } from 'react-router-dom'
import quizData from './quizqs.json'
import { useState } from 'react'
import QuestionBox from '../components/QuestionBox/QuestionBox'
import './QuizP.css'


function QuizP() {
  const { moduleId } = useParams()
  const [points, setPoints] = useState(0)
  const [qsNumber, setQsNumber] = useState(0)
  const [inputted, setInputted] = React.useState(false);

  return (
    <div className='container-qp'>
      <button className='backBtn' onClick={() => window.location.href = `/`}>{"⬅ Back"}</button>
      <h1 className='moduleh1'>Module: {moduleId}</h1>
      <h1 className='points'>Points: <span className='pointsNum'>{points}</span></h1>
      <div className='qContainer'>
      <QuestionBox
        qn={quizData.modules[moduleId - 1].questions[qsNumber]}
        setPoints={setPoints}
        points={points}
        qsNumber={qsNumber}

        setInputted={setInputted}
        inputted={inputted}
        />
        </div>
      <div className='btns'>
        <button onClick={() => setQsNumber(qsNumber > 0 ? qsNumber - 1 : qsNumber)} className='prevBtn'>{"⬅"}</button>
        <button onClick={() => {
          setInputted(false)
          setQsNumber(qsNumber < (quizData.modules[moduleId - 1].questions.length - 1) ? qsNumber + 1 : qsNumber)
          if(qsNumber === (quizData.modules[moduleId - 1].questions.length - 1)) {
            window.location.href = `/quiz/${moduleId}/result/${points}`
          }
          }} className={qsNumber < (quizData.modules[moduleId - 1].questions.length - 1) ? "nextBtn" : "submitBtn"}
          >{qsNumber < (quizData.modules[moduleId - 1].questions.length - 1) ? "NEXT" : "Submit"}</button>
        </div>
    </div>
  )
}

export default QuizP
