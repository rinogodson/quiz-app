import React from 'react'
import quizData from './quizqs.json'

function ModulesP() {
  return (
    <div>
      <h1>Modules</h1>
      {quizData.modules.map((module) => (
        <div key={module.module}>
          <button className='mdBtn' onClick={() => window.location.href = `/quiz/${module.module}`}>Module {module.module}</button>
        </div>
      ))}
    </div>
  )
}

export default ModulesP

