import React from 'react'
import quizData from './quizqs.json'
import './ModulesP.css'

function ModulesP() {
  return (
    <div className='container'>
      <h1>Modules</h1>
      <div className='moduleList'>
      {quizData.modules.map((module) => (
        <div key={module.module}>
          <button className='mdBtn' onClick={() => window.location.href = `/quiz/${module.module}`}>{module.module}</button>
        </div>
      ))}
      </div>
    </div>
  )
}

export default ModulesP

