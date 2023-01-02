import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Square = (props) => {
  return (
    <button 
    className="square"
    onClick={props.onClickEvent}
    >
    {props.value}
    </button>
  )
}
const Board = () => {
  const initialSquares = Array(9).fill(null);
  const[squares, setSquares] = useState(initialSquares);
  const[XisNext, setXisNext] = useState(true);

  //drawing values on board when clicked
  const handleClickEvent = (i) => {
   const newSquares = [...squares];

   //Winner
   //if there is a winner, no more X or O can be drawn on the board even if clicked
   const winnerDeclared = Boolean(calculateWinner(newSquares));
   const squareFilled = Boolean(newSquares[i]);
   if(winnerDeclared || squareFilled){
    return;
   }

   newSquares[i] = XisNext ? 'X' : 'O'; //ternary operator -> condition ? expression1 : expression2
   setSquares(newSquares);
   setXisNext(!XisNext); //boolean check and taking turns
  }

  const renderSquare = (i) => { 
    return (
      <Square value={squares[i]} 
      onClickEvent={() => handleClickEvent(i)}
      />
    );
  };
  const winner = calculateWinner(squares);
  const status = winner ?
  `Winner is ${winner}` :
  `Next player: ${XisNext ? 'X' : 'O'}`;
  
  return (
    <div style={{
      backgroundColor: '#D3CBC7',
      margin: 20,
      padding: 10,
      color: 'black'
    }}>
      <div>{status}</div>
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

const Instructions = () =>{
  return(
    <div style={{
      margin: 80
    }}>
      Tic-Tac-Toe
      <ol>
        <li>Player X starts the game</li>
        <li>Three of the same values vertically, horizontally or diagonally wins the game</li>
        <li>Refresh the page to play again</li>
        <li>Have fun!</li>
      </ol>     
    </div>
  )
}


const GameTicTacToe = () =>{
  return (  
   <div style={{
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'
   }}>    
    <Instructions/>
    <Board/>
   </div>
  );
};

ReactDOM.render(
  <GameTicTacToe />,
  document.getElementById('root')
)
  
function calculateWinner(squares){
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], //horizontal (rows)
    [0, 3, 6], [1, 4, 7], [2, 5, 8], //vertical (columns)
    [0, 4, 8], [2, 4, 6] //diagonal
  ];

  for (let line of lines){
    const [a, b, c] = line;
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a]; //X or O
    }
  }
  return null;
}
