import '../styles/layout/game.scss';
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import groguImg from '../images/grogu.png';
import wayImg from '../images/way.png';
import cookieImg from '../images/cookie.png';
import Footer from './Footer';
import Win from './Win';
import Lost from './Lost';
const Game = (props) => {
  const [win, setWin] = useState('hidden');
  const [lost, setLost] = useState('hidden');
  const [startGrogu, setStartGrogu] = useState('');
  const [positionZero, setPositionZero] = useState('hidden');
  const [positionOne, setPositionOne] = useState('hidden');
  const [positionTwo, setPositionTwo] = useState('hidden');
  const [positionThree, setPositionThree] = useState('hidden');
  const [positionFour, setPositionFour] = useState('hidden');
  const [positionFive, setPositionFive] = useState('hidden');
  const [positionSix, setPositionSix] = useState('hidden');

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
  function way() {
    console.log(props.stateVariable[0]);
    return (
      <>
        <div className='game__grogu'>
          <img
            className={`position0 ${startGrogu}`}
            src={groguImg}
            alt='Grogu en su cuna'
            title='Grogu en su cuna'
          />
        </div>
        <section className='game__container'>
          <div className='game__container--way'>
            <img
              className={`game__container--way__position${props.stateVariable[0]}  ${positionZero}`}
              src={groguImg}
              alt='Grogu en su cuna'
              title='Grogu en su cuna'
            />
            <img
              className='game__container--way__item'
              src={wayImg}
              alt='Camino'
              title='Camino'
            />
          </div>
          <div className='game__container--way'>
            <img
              className={`game__container--way__position${props.stateVariable[0]} ${positionOne}`}
              src={groguImg}
              alt='Grogu en su cuna'
              title='Grogu en su cuna'
            />
            <img
              className='game__container--way__item'
              src={wayImg}
              alt='Camino'
              title='Camino'
            />
          </div>
          <div className='game__container--way'>
            <img
              className={`game__container--way__position${props.stateVariable[0]} ${positionTwo}`}
              src={groguImg}
              alt='Grogu en su cuna'
              title='Grogu en su cuna'
            />
            <img
              className='game__container--way__item'
              src={wayImg}
              alt='Camino'
              title='Camino'
            />
          </div>
          <div className='game__container--way'>
            <img
              className={`game__container--way__position${props.stateVariable[0]} ${positionThree}`}
              src={groguImg}
              alt='Grogu en su cuna'
              title='Grogu en su cuna'
            />
            <img
              className='game__container--way__item'
              src={wayImg}
              alt='Camino'
              title='Camino'
            />
          </div>
          <div className='game__container--way'>
            <img
              className={`game__container--way__position${props.stateVariable[0]} ${positionFour}`}
              src={groguImg}
              alt='Grogu en su cuna'
              title='Grogu en su cuna'
            />
            <img
              className='game__container--way__item'
              src={wayImg}
              alt='Camino'
              title='Camino'
            />
          </div>
          <div className='game__container--way'>
            <img
              className={`game__container--way__position${props.stateVariable[0]} ${positionFive}`}
              src={groguImg}
              alt='Grogu en su cuna'
              title='Grogu en su cuna'
            />
            <img
              className='game__container--way__item'
              src={wayImg}
              alt='Camino'
              title='Camino'
            />
          </div>{' '}
        </section>{' '}
        <div className='game__container--cupboard'>
          <img
            className={`game__container--way__position${props.stateVariable[0]} ${positionSix}`}
            src={groguImg}
            alt='Grogu en su cuna'
            title='Grogu en su cuna'
          />
          <div className='game__container--cupboard__cookies'>
            <p className='game__container--cupboard__cookies--title'>
              Galletas
            </p>
            <div className='game__container--cupboard__cookies--containerImgs'>
              <img
                className='game__container--cupboard__cookies--containerImgs__imgTop'
                src={cookieImg}
                alt='Galleta'
                title='galleta'
              />
              <img
                className='game__container--cupboard__cookies--containerImgs__imgBottomLeft'
                src={cookieImg}
                alt='Galleta'
                title='galleta'
              />
              <img
                className='game__container--cupboard__cookies--containerImgs__imgBottomRight'
                src={cookieImg}
                alt='Galleta'
                title='galleta'
              />
            </div>
          </div>
          <div className='game__container--cupboard__frogs'>Ranas</div>
          <div className='game__container--cupboard__eggs'>
            <p>Huevos</p>
            <div>
              {/* <img src={cookieImg} alt='Galleta' title='galleta' />
              <img src={cookieImg} alt='Galleta' title='galleta' />
              <img src={cookieImg} alt='Galleta' title='galleta' /> */}
            </div>
          </div>
        </div>
      </>
    );
  }
  const groguAdvances = () => {
    if (props.stateVariable[0] === 6) {
      setLost('');
      setPositionFive('hidden');
      setPositionSix('');
    } else {
      setLost('hidden');
      let aux = props.stateVariable[0];
      aux++;
      props.stateVariable[0] = aux;
      console.log((props.stateVariable[0] = aux));
      groguMovementOnRoad();
    }
  };
  const groguMovementOnRoad = () => {
    switch (props.stateVariable[0]) {
      case 1:
        setStartGrogu('hidden');
        setPositionZero('');
        break;
      case 2:
        setPositionZero('hidden');
        setPositionOne('');
        break;
      case 3:
        setPositionOne('hidden');
        setPositionTwo('');
        break;
      case 4:
        setPositionTwo('hidden');
        setPositionThree('');
        break;
      case 5:
        setPositionThree('hidden');
        setPositionFour('');
        break;
      case 6:
        setPositionFour('hidden');
        setPositionFive('');
        break;
      default:
        break;
    }
  };
  const collectCookie = () => {
    if (
      props.stateVariable[1] === 0 &&
      props.stateVariable[2] === 0 &&
      props.stateVariable[3] === 0
    ) {
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
    } else if (props.stateVariable[3] !== 0) {
      let aux = props.stateVariable[3];
      aux--;
      props.stateVariable[3] = aux;
    }
  };

  return (
    <>
      <section className='game' onLoad={props.startGame}>
        <article className='game__menu'>
          <NavLink to='/'>
            <input type='button' value='Menú' />
          </NavLink>
        </article>
        <input
          className='game__dice'
          type='button'
          value=' dado'
          id={props.diceValue}
          onClick={randomValue}
        />
        <p className='game__dice--number'>
          {props.diceValue === ''
            ? ''
            : 'El resultado del dado es: ' + props.diceValue}
        </p>

        <>{way()}</>

        <Win win={win} />
        <Lost lost={lost} />
      </section>
      <Footer />
    </>
  );
};
export default Game;
