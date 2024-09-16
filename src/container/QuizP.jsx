import React from 'react'
import { useParams } from 'react-router-dom'
import quizData from './quizqs.json'
import { useState } from 'react'
import QuestionBox from '../components/QuestionBox/QuestionBox'

function QuizP() {
  const { moduleId } = useParams()
  const [points, setPoints] = useState(0)
  const [qsNumber, setQsNumber] = useState(0)
  return (
    <div>
      <button onClick={() => window.location.href = `/`}>Go Back</button>
      <h1>Points: {points}</h1>
      <h1>Module: {moduleId}</h1>
      <QuestionBox
        qn={quizData.modules[moduleId - 1].questions[qsNumber]}
        setPoints={setPoints}
        points={points}
        qsNumber={qsNumber}
      />
      <button onClick={() => setQsNumber(qsNumber > 0 ? qsNumber - 1 : qsNumber)}>Previous Question</button>
      <button onClick={() => {
        setQsNumber(qsNumber < (quizData.modules[moduleId - 1].questions.length - 1) ? qsNumber + 1 : qsNumber)
        if(qsNumber === (quizData.modules[moduleId - 1].questions.length - 1)) {
          window.location.href = `/quiz/${moduleId}/result/${points}`
        }
        }}>{qsNumber < (quizData.modules[moduleId - 1].questions.length - 1) ? "Next Question" : "Submit"}</button>
    </div>
  )
}

export default QuizP
