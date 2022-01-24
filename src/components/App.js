import '../styles/App.scss';

// Fichero src/components/App.js
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from './Landing';
import Game from './Game';
import Rules from './Rules';
import Pieces from './Pieces';

const App = () => {
  const [diceValue, setDiceValue] = useState('');
  const [stateVariable, setStateVariable] = useState([]);
  const startGame = () => {
    setDiceValue('');
    let babyYoda = 0;
    let cookies = 3;
    let frogs = 3;
    let eggs = 3;
    stateVariable.push(babyYoda);
    stateVariable.push(cookies);
    stateVariable.push(frogs);
    stateVariable.push(eggs);
  };

  return (
    <div className='body'>
      <Routes>
        <Route path='/' element={<Landing startGame={startGame} />} />
        <Route path='/pieces' element={<Pieces />} />
        <Route
          path='/game'
          element={
            <Game
              setDiceValue={setDiceValue}
              diceValue={diceValue}
              stateVariable={stateVariable}
              setStateVariable={setStateVariable}
            />
          }
        />

        <Route path='/rules' element={<Rules />} />
      </Routes>
    </div>
  );
};

export default App;
