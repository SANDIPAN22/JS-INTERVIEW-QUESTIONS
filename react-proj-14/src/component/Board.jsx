import React, {useEffect, useState} from 'react'
import {leftRightDiagonalCheck, rightLeftDiagonalCheck, rowCheck, colCheck} from "../utils/validations"

const Board = ({rowCount, player, setPlayer, score, setScore, winner, declareWinner}) => {
    const _boxes = new Array(rowCount*rowCount).fill("")
    const [position, setPosition] = useState({r:0, c:0})
    
    const handleClick = (r,c) => {

        setScore(prev => {
            const newScore = JSON.parse(JSON.stringify(prev))
            newScore[r][c] = player

            return newScore
        })
        setPlayer(prev => prev === "A" ? "B": "A")
        setPosition({r,c})
    }

    useEffect(()=>{
        
        if(leftRightDiagonalCheck(score, rowCount)){
          declareWinner()
          return
        }
        if(rightLeftDiagonalCheck(score, rowCount)){
          declareWinner()
          return
        }
        if(rowCheck(score, rowCount)){
          declareWinner()
          return
        }
        if(colCheck(score, rowCount, position.r,position.c)){
          declareWinner()
            return
          }
    
    
      }, [score])

    
  return winner ? (<h1>WINNER IS {winner}</h1>) : (
    <>
    
    <div className="board-container" style={{
        gridTemplateColumns: `repeat(${rowCount}, minmax(50px, 1fr))`,
        gridTemplateRows: `repeat(${rowCount}, minmax(50px, 1fr))`,
        width: `${rowCount*125}px`,
        height: `${rowCount*125}px`
    }}>
        {_boxes.map((b, ind) => {
            const row = Math.floor(ind/rowCount)
            const col = Math.floor(ind%rowCount)
            return (<div className={`${score[row][col] ? score[row][col] === "A" ? "box-done" : "box-done" : "box"}`} key={ind} onClick={e=>handleClick(row, col)}>

                    {score[row][col] ? score[row][col] === "A" ? "⭕" : "❌" : ""}
                
                 </div>)
        })}

       
    </div>
    
    </>
  )
}

export default Board