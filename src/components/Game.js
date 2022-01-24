import '../styles/layout/game.scss';
import { NavLink } from 'react-router-dom';

const Game = (props) => {
  const randomValue = () => {
    const math = Math.floor(Math.random() * 4 + 1);

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
  };

  const groguAdvances = () => {
    if (props.stateVariable[0] === 6) {
      console.log('perdisión');
    } else {
      let aux = props.stateVariable[0];
      aux++;
      props.stateVariable[0] = aux;
      console.log(props.stateVariable);
    }
  };
  const collectCookie = () => {
    if (
      props.stateVariable[1] === 0 &&
      props.stateVariable[2] === 0 &&
      props.stateVariable[3] === 0
    ) {
      console.log('Hemos ganado la copa de bilbado');
    } else if (props.stateVariable[1] !== 0) {
      let aux = props.stateVariable[1];
      aux--;
      props.stateVariable[1] = aux;
      console.log(props.stateVariable);
    }
  };
  const collectFrog = () => {
    if (
      props.stateVariable[1] === 0 &&
      props.stateVariable[2] === 0 &&
      props.stateVariable[3] === 0
    ) {
      console.log('Hemos ganado la copa de bilbado');
    } else if (props.stateVariable[2] !== 0) {
      let aux = props.stateVariable[2];
      aux--;
      props.stateVariable[2] = aux;
      console.log(props.stateVariable);
    }
  };
  const collectEgg = () => {
    if (
      props.stateVariable[1] === 0 &&
      props.stateVariable[2] === 0 &&
      props.stateVariable[3] === 0
    ) {
      console.log('Hemos ganado la copa de bilbado');
    } else if (props.stateVariable[3] !== 0) {
      let aux = props.stateVariable[3];
      aux--;
      props.stateVariable[3] = aux;
      console.log(props.stateVariable);
    }
  };
  // const resetGame = () => {
  //   window.location.reload();
  // };
  return (
    <div className='game'>
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
            src={props.grogu}
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
      <NavLink to='/'>
        <input type='button' value='Volver' />
      </NavLink>
    </div>
  );
};
export default Game;
