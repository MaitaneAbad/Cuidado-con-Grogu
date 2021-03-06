import { NavLink } from 'react-router-dom';
import '../styles/layout/landing.scss';
const Landing = (props) => {
  return (
    <div className='container'>
      <div className='container__links'>
        <NavLink to='rules'>
          <input
            className='container__links--button'
            type='button'
            value='Reglas juego'
          />
        </NavLink>
        <NavLink to='pieces'>
          <input
            className='container__links--button'
            type='button'
            value='Piezas juego'
          />
        </NavLink>
        <NavLink to='game'>
          <input
            className='container__links--button'
            type='button'
            value='Comenzar juego'
            onClick={props.startGame}
          />
        </NavLink>
      </div>
    </div>
  );
};
export default Landing;
