import '../styles/App.scss';

// Fichero src/components/App.js
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from './Landing';
import Game from './Game';
import Rules from './Rules';
import Pieces from './Pieces';
import Footer from './Footer';
import groguImg from '../images/grogu.png';

const App = () => {
  const [diceValue, setDiceValue] = useState('');
  const [grogu, setGrogu] = useState(groguImg);
  const [stateVariable, setStateVariable] = useState([]);
  // const [counterCookies, setCounterCookies] = useState(3);
  // const [counterEggs, setCounterEggs] = useState(3);
  // const [counterFrogs, setCounterFrogs] = useState(3);
  const startGame = () => {
    let babyYoda = 0;
    let cookies = 3;
    let frogs = 3;
    let eggs = 3;
    stateVariable.push(babyYoda);
    stateVariable.push(cookies);
    stateVariable.push(frogs);
    stateVariable.push(eggs);
    console.log(stateVariable);
  };

  return (
    <div className='body'>
      <Routes>
        <Route path='/' element={<Landing startGame={startGame} />}></Route>
        <Route path='/pieces' element={<Pieces />}></Route>
        <Route
          path='/game'
          element={
            <Game
              grogu={grogu}
              //setGrogu={setGrogu}
              setDiceValue={setDiceValue}
              diceValue={diceValue}
              stateVariable={stateVariable}
              setStateVariable={setStateVariable}
            />
          }
        ></Route>
        <Route path='/rules' element={<Rules />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
