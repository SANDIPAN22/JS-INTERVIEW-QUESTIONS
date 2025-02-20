import React, { useState, useEffect } from 'react'
import "./App.css"
import Board from './component/Board'

const App = () => {
  const [totalRow, setTotalRow] = useState(()=>{
    return Number(prompt("Enter the row number? (range is 3 to 8)", 3))
  })
  const [player, setPlayer] = useState("A")
  const [score, setScore] = useState(Array(totalRow).fill(Array(totalRow).fill(0)))
  const [winner, setWinner] = useState(null)

  const handleReset = () => {
    setWinner(null)
    setScore(Array(totalRow).fill(Array(totalRow).fill(0)))
    setPlayer("A")
  }

  const declareWinner = () =>{
    if(player === "A") setWinner("B")
    else setWinner("A")
    setPlayer("-")
  }

  return (
    <>
    <div id="heading">
      TIC TAC TO GAME
    </div>
    <div id="action-panel">
      <h2> Turn For PLayer : {player}</h2>
      <button type="button" onClick={handleReset}> Reset</button>
    </div>
    <div id="board">
        <Board rowCount={totalRow} player={player} setPlayer={setPlayer} score={score} setScore={setScore} winner={winner} declareWinner={declareWinner}/>
    </div>
    </>
  )
}

export default App