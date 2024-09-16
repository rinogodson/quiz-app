import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ModulesP from './container/ModulesP'
import QuizP from './container/QuizP'
import Results from './components/QuestionBox/Resuts'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ModulesP />} />
        <Route path="/quiz/:moduleId" element={<QuizP />} />
        <Route path="/quiz/:moduleId/result/:points" element={<Results />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

