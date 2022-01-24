import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <>
      {' '}
      <div className=''>
        <NavLink to='rules'>
          <input type='button' value='Reglas juego' />
        </NavLink>
        <NavLink to='pieces'>
          <input type='button' value='Piezas juego' />
        </NavLink>
        <NavLink to='game'>
          <input type='button' value='Comenzar juego' />
        </NavLink>
      </div>
    </>
  );
};
export default Header;
