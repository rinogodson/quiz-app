import React from 'react'
import { useParams } from 'react-router-dom'

function Resuts() {
    const { moduleId, points } = useParams()
  return (
    <div>
        <h2>Module: {moduleId}</h2>
      <h1>Results: {points}</h1>
    </div>
  )
}

export default Resuts
