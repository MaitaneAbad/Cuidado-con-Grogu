import '../styles/layout/game.scss';
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import groguImg from '../images/grogu.png';
import wayImg from '../images/way.png';
import cookieImg from '../images/cookie.png';
import eggImg from '../images/egg.png';
import frogImg from '../images/frog.png';
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
  const [cookieThree, setCookieThree] = useState('');
  const [cookieTwo, setCookieTwo] = useState('');
  const [cookieOne, setCookieOne] = useState('');
  const [frogThree, setFrogThree] = useState('');
  const [frogTwo, setFrogTwo] = useState('');
  const [frogOne, setFrogOne] = useState('');
  const [eggThree, setEggThree] = useState('');
  const [eggTwo, setEggTwo] = useState('');
  const [eggOne, setEggOne] = useState('');

  const winnerModal = () => {
    if (
      props.stateVariable[1] === 0 &&
      props.stateVariable[2] === 0 &&
      props.stateVariable[3] === 0
    ) {
      setWin('');
    }
  };

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
    winnerModal();
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
          <div className='game__container--cupboard'>
            <img
              className={`game__container--way__position${props.stateVariable[0]} ${positionSix}`}
              src={groguImg}
              alt='Grogu en su cuna'
              title='Grogu en su cuna'
            />
            <div className='game__container--cupboard__food'>
              <div className='game__container--cupboard__food--containerImgs'>
                <img
                  className={`game__container--cupboard__food--containerImgs__imgTop ${cookieThree}`}
                  src={cookieImg}
                  alt='Galleta'
                  title='galleta'
                />
                <img
                  className={`game__container--cupboard__food--containerImgs__imgBottomLeft ${cookieTwo}`}
                  src={cookieImg}
                  alt='Galleta'
                  title='galleta'
                />
                <img
                  className={`game__container--cupboard__food--containerImgs__imgBottomRight ${cookieOne}`}
                  src={cookieImg}
                  alt='Galleta'
                  title='galleta'
                />
              </div>
            </div>
            <div className='game__container--cupboard__food'>
              <div className='game__container--cupboard__food--containerImgs'>
                <img
                  className={`game__container--cupboard__food--containerImgs__imgTop ${frogThree}`}
                  src={frogImg}
                  alt='Rana'
                  title='Rana'
                />
                <img
                  className={`game__container--cupboard__food--containerImgs__imgBottomLeft ${frogTwo}`}
                  src={frogImg}
                  alt='Rana'
                  title='Rana'
                />
                <img
                  className={`game__container--cupboard__food--containerImgs__imgBottomRight ${frogOne}`}
                  src={frogImg}
                  alt='Rana'
                  title='Rana'
                />
              </div>
            </div>
            <div className='game__container--cupboard__food'>
              <div className='game__container--cupboard__food--containerImgs'>
                <img
                  className={`game__container--cupboard__food--containerImgs__imgTop ${eggThree}`}
                  src={eggImg}
                  alt='Huevo'
                  title='Huevo'
                />
                <img
                  className={`game__container--cupboard__food--containerImgs__imgBottomLeft ${eggTwo} `}
                  src={eggImg}
                  alt='Huevo'
                  title='Huevo'
                />
                <img
                  className={`game__container--cupboard__food--containerImgs__imgBottomRight ${eggOne}`}
                  src={eggImg}
                  alt='Huevo'
                  title='Huevo'
                />
              </div>
            </div>
          </div>
        </section>{' '}
      </>
    );
  }
  const groguAdvances = () => {
    if (props.stateVariable[0] === 6) {
      setLost('');
      setPositionFive('transitionHidden');
      setPositionSix('transitionGrogu');
    } else {
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
        setStartGrogu('transitionHidden');
        setPositionZero('transitionGrogu');
        break;
      case 2:
        setPositionZero('transitionHidden');
        setPositionOne('transitionGrogu');
        break;
      case 3:
        setPositionOne('transitionHidden');
        setPositionTwo('transitionGrogu');
        break;
      case 4:
        setPositionTwo('transitionHidden');
        setPositionThree('transitionGrogu');
        break;
      case 5:
        setPositionThree('transitionHidden');
        setPositionFour('transitionGrogu');
        break;
      case 6:
        setPositionFour('transitionHidden');
        setPositionFive('transitionGrogu');
        break;
      default:
        break;
    }
  };
  const cookieCollectCupboard = () => {
    switch (props.stateVariable[1]) {
      case 2:
        setCookieThree('transitionHidden');
        break;
      case 1:
        setCookieTwo('transitionHidden');
        break;
      case 0:
        setCookieOne('transitionHidden');
        break;

      default:
        break;
    }
  };
  const frogCollectCupboard = () => {
    switch (props.stateVariable[2]) {
      case 2:
        setFrogThree('transitionHidden');
        break;
      case 1:
        setFrogTwo('transitionHidden');
        break;
      case 0:
        setFrogOne('transitionHidden');
        break;

      default:
        break;
    }
  };
  const eggCollectCupboard = () => {
    switch (props.stateVariable[3]) {
      case 2:
        setEggThree('transitionHidden');
        break;
      case 1:
        setEggTwo('transitionHidden');
        break;
      case 0:
        setEggOne('transitionHidden');
        break;

      default:
        break;
    }
  };
  const collectCookie = () => {
    if (props.stateVariable[1] !== 0) {
      let aux = props.stateVariable[1];
      aux--;
      props.stateVariable[1] = aux;
      cookieCollectCupboard();
    }
    console.log(props.stateVariable);
  };
  const collectFrog = () => {
    if (props.stateVariable[2] !== 0) {
      let aux = props.stateVariable[2];
      aux--;
      props.stateVariable[2] = aux;
      frogCollectCupboard();
    }
    console.log(props.stateVariable);
  };
  const collectEgg = () => {
    if (props.stateVariable[3] !== 0) {
      let aux = props.stateVariable[3];
      aux--;
      props.stateVariable[3] = aux;
      eggCollectCupboard();
    }
    console.log(props.stateVariable);
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
          {props.diceValue === '' ? '' : props.diceValue}
        </p>
        <>{way()}</>
        <Win win={win} />
        <Lost lost={lost} />
        <Footer />
      </section>
    </>
  );
};
export default Game;
