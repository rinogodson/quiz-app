import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ModulesP from './container/ModulesP'
import QuizP from './container/QuizP'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ModulesP />} />
        <Route path="/quiz/:moduleId" element={<QuizP />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

