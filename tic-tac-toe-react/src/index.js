import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Square = (props) => {
  return (
    <div className="square">
    {props.value}
    </div>
  )
}
const Board = () => {
  const renderSquare = (i) => { 
    return (
      <Square value={i} />
    );
  };

  return (
    <div style={{
      backgroundColor: '#D3CBC7',
      margin: 10,
      padding: 20
    }}>
      BOARD
      <div className='boardRow'>
      {renderSquare(0)}{renderSquare(1)}{renderSquare(2)}
      </div>
      <div className='boardRow'>
      {renderSquare(3)}{renderSquare(4)}{renderSquare(5)}
      </div>
      <div className='boardRow'>
      {renderSquare(6)}{renderSquare(7)}{renderSquare(8)}
      </div>
    </div>
  );
};


const GameTicTacToe = () =>{
  return (
    <div classname="game">
      Tic-Tac-Toe
      <Board/>
    </div>
  );
};

ReactDOM.render(
  <GameTicTacToe />,
  document.getElementById('root')
)
  

