import '../styles/layout/game.scss';
import React, { useState } from 'react';
import groguImg from '../images/grogu.png';
import wayImg from '../images/way.png';
import cookieImg from '../images/cookie.png';
import eggImg from '../images/egg.png';
import frogImg from '../images/frog.png';
import Footer from './Footer';
import Win from './Win';
import Lost from './Lost';
import Menu from './Menu';
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
  const [number, setNumber] = useState('');
  const [text, setText] = useState('');

  //Comprobación de si ya tenemos el armario a 0
  const winnerModal = () => {
    if (
      props.stateVariable[1] === 0 &&
      props.stateVariable[2] === 0 &&
      props.stateVariable[3] === 0
    ) {
      setWin('');
    }
  };

  //Crear un número aleatorio cada vez que le damos al dado, ese número es entero y su valor está entre 1-4.
  //Después comporbamos qué número ha salido, entramos en el caso del switch y realizamos la función correspondiente
  const randomValue = () => {
    props.setDiceValue('');
    setTimeout(() => {
      setNumber('transitionNumber');
    }, 100);

    const math = Math.floor(Math.random() * 4 + 1);
    props.setDiceValue(math);
    setNumber('');

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
  // const textModal = () => {
  //   console.log(props.stateVariable);
  //   if (props.stateVariable[0] <= 1) {
  //     let aux = props.stateVariable[0];
  //     aux++;
  //     props.stateVariable[0] = aux;
  //     console.log('avanza grogu');
  //   }
  // };
  //función para renderizar la página dependiendo del valor sacado en el dado,
  // y hacer que se vaya moviendo grogu o ir sacando comida del armario
  //Para ello, hacemos que las clases vayan cambiando en función del valor obtenido
  function way() {
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
        <article className='game__containerText'>{text}</article>
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
          </div>
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
              <div className='game__container--cupboard__food--containerImgs middle'>
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
        </section>
      </>
    );
  }

  //Función para que vaya avanzando grogu a la casilla del armario
  const groguAdvances = () => {
    if (props.stateVariable[0] === 6) {
      setLost('');
      setPositionFive('transitionHidden');
      setPositionSix('transitionGrogu');
      setText('¡Grogu llenó su barriguita de comida!');
    } else {
      let aux = props.stateVariable[0];
      aux++;
      props.stateVariable[0] = aux;
      groguMovementOnRoad();
    }
  };

  const groguMovementOnRoad = () => {
    switch (props.stateVariable[0]) {
      case 1:
        setStartGrogu('transitionHidden');
        setPositionZero('transitionGrogu');
        setText('Grogu se acerca...');

        break;
      case 2:
        setPositionZero('transitionHidden');
        setPositionOne('transitionGrogu');
        setText('- ¡No Grogu, no son para ti!');
        break;
      case 3:
        setPositionOne('transitionHidden');
        setPositionTwo('transitionGrogu');
        setText('Parece que quiere coger los huevos o una rana, quién sabe...');
        break;
      case 4:
        setPositionTwo('transitionHidden');
        setPositionThree('transitionGrogu');
        setText('Ohhh no!!! sigue avanzando Grogu...');
        break;
      case 5:
        setPositionThree('transitionHidden');
        setPositionFour('transitionGrogu');
        setText('- ¡Ni se te ocurra coger nada del armario!');
        break;
      case 6:
        setPositionFour('transitionHidden');
        setPositionFive('transitionGrogu');
        setText('¡Ohh Noo, está demasiado cerca de la mercancia!');
        break;
      default:
        break;
    }
  };

  //Función de coger una cookie
  const collectCookie = () => {
    if (props.stateVariable[1] !== 0) {
      let aux = props.stateVariable[1];
      aux--;
      props.stateVariable[1] = aux;
      cookieCollectCupboard();
    } else if (props.stateVariable[1] === 0) {
      setText('');
    }
  };

  const cookieCollectCupboard = () => {
    switch (props.stateVariable[1]) {
      case 2:
        setCookieThree('transitionHidden');
        setText('Vamos a descargar las galletas...');
        break;
      case 1:
        setCookieTwo('transitionHidden');
        setText('Una galleta más...');
        break;
      case 0:
        setCookieOne('transitionHidden');
        setText(
          '¡Bien, y con esto terminamos con la descarga de las galletas!'
        );
        break;

      default:
        setText('');
        break;
    }
  };

  //Función de coger una rana
  const collectFrog = () => {
    if (props.stateVariable[2] !== 0) {
      let aux = props.stateVariable[2];
      aux--;
      props.stateVariable[2] = aux;
      frogCollectCupboard();
      console.log((props.stateVariable[2] = aux));
    } else if (props.stateVariable[2] === 0) {
      setText('');
    }
  };

  const frogCollectCupboard = () => {
    switch (props.stateVariable[2]) {
      case 2:
        setFrogThree('transitionHidden');
        setText('¡Uy, que resbaladiza son las ranas...!');
        break;
      case 1:
        setFrogTwo('transitionHidden');
        setText(' ¡Tu no te escapas, rana!');
        break;
      case 0:
        setFrogOne('transitionHidden');
        setText('Y con esto terminamos con las ranas de Sorgan.');
        break;

      default:
        setText('');
        break;
    }
  };

  //Función de coger un huevo
  const collectEgg = () => {
    if (props.stateVariable[3] !== 0) {
      let aux = props.stateVariable[3];
      aux--;
      props.stateVariable[3] = aux;
      eggCollectCupboard();
    } else if (props.stateVariable[3] === 0) {
      setText('');
    }
  };

  const eggCollectCupboard = () => {
    switch (props.stateVariable[3]) {
      case 2:
        setEggThree('transitionHidden');
        setText('- ¡No, Grogu, no son para ti estos huevos!');
        break;
      case 1:
        setEggTwo('transitionHidden');
        setText('Con cuidado descargamos otro huevo...');
        break;
      case 0:
        setEggOne('transitionHidden');
        setText('¡Bien, pusimos los huevos fuera del alcance de Grogu!');
        break;

      default:
        setText('');
        break;
    }
  };

  return (
    <>
      <main className='game' onLoad={props.startGame}>
        <Menu />
        <article className='game__dice'>
          <input
            className='game__dice--button'
            type='button'
            value=' dado'
            id={props.diceValue}
            onClick={randomValue}
          />
          <p className={`game__dice--number ${number}`}>
            {props.diceValue === '' ? '' : props.diceValue}
          </p>
        </article>
        <>{way()}</>
        <Win win={win} />
        <Lost lost={lost} />
        <Footer />
      </main>
    </>
  );
};
export default Game;
