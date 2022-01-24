import '../styles/layout/game.scss';
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import groguImg from '../images/grogu.png';
import Footer from './Footer';
import Win from './Win';
import Lost from './Lost';
const Game = (props) => {
  const [win, setWin] = useState('hidden');
  const [lost, setLost] = useState('hidden');
  const randomValue = () => {
    const math = Math.floor(Math.random() * 4 + 1);
    props.setDiceValue(0);
    props.setDiceValue(math);
    switch (math) {
      case 1:
        props.setDiceValue(1);
        groguAdvances();
        break;
      case 2:
        props.setDiceValue(2);
        collectCookie();
        break;
      case 3:
        props.setDiceValue(3);
        collectFrog();
        break;
      case 4:
        props.setDiceValue(4);
        collectEgg();
        break;
      default:
        break;
    }
    console.log(props.stateVariable);
  };

  const groguAdvances = () => {
    if (props.stateVariable[0] === 6) {
      setLost('');
      console.log('perdisión');
    } else {
      setLost('hidden');
      let aux = props.stateVariable[0];
      aux++;
      props.stateVariable[0] = aux;
    }
  };
  const collectCookie = () => {
    if (
      props.stateVariable[1] === 0 &&
      props.stateVariable[2] === 0 &&
      props.stateVariable[3] === 0
    ) {
      console.log('Hemos ganado la copa de bilbado');
      setWin('');
    } else if (props.stateVariable[1] !== 0) {
      let aux = props.stateVariable[1];
      aux--;
      props.stateVariable[1] = aux;
    }
  };
  const collectFrog = () => {
    if (
      props.stateVariable[1] === 0 &&
      props.stateVariable[2] === 0 &&
      props.stateVariable[3] === 0
    ) {
      setWin('');
      console.log('Hemos ganado la copa de bilbado');
    } else if (props.stateVariable[2] !== 0) {
      let aux = props.stateVariable[2];
      aux--;
      props.stateVariable[2] = aux;
    }
  };
  const collectEgg = () => {
    if (
      props.stateVariable[1] === 0 &&
      props.stateVariable[2] === 0 &&
      props.stateVariable[3] === 0
    ) {
      setWin('');
      console.log('Hemos ganado la copa de bilbado');
    } else if (props.stateVariable[3] !== 0) {
      let aux = props.stateVariable[3];
      aux--;
      props.stateVariable[3] = aux;
    }
  };

  return (
    <>
      <NavLink to='/'>
        <input type='button' value='Menú' />
      </NavLink>
      <div className='game' onLoad={props.startGame}>
        <input
          type='button'
          value=' dado'
          id={props.diceValue}
          onClick={randomValue}
        />
        <p>
          {props.diceValue === ''
            ? ''
            : 'El resultado del dado es: ' + props.diceValue}
        </p>
        <section className='game__container'>
          <div className='game__container--grogu'>
            <img
              src={groguImg}
              alt='Grogu en su cuna'
              title='Grogu en su cuna'
            />
          </div>
          <div className='game__container--way'>
            <p>Camino 1</p>
          </div>
          <div className='game__container--way'>
            <p>Camino 2</p>
          </div>
          <div className='game__container--way'>
            <p>Camino 3</p>
          </div>
          <div className='game__container--way'>
            <p>Camino 4</p>
          </div>
          <div className='game__container--way'>
            <p>Camino 5</p>
          </div>
          <div className='game__container--way'>
            <p>Camino 6</p>
          </div>

          <div className='game__container--cupboard'>
            Armario
            <div className='game__container--cupboard__cookies'>Galletas</div>
            <div className='game__container--cupboard__frogs'>Ranas</div>
            <div className='game__container--cupboard__eggs'>Huevos</div>
          </div>
        </section>
        <Win win={win} />
        <Lost lost={lost} />
      </div>
      <Footer />
    </>
  );
};
export default Game;
