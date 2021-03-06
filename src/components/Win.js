import '../styles/layout/win.scss';
import { NavLink } from 'react-router-dom';
const Win = (props) => {
  return (
    <div className={`containerWin ${props.win}`}>
      <p className='containerWin__title'>Mando completa la misión</p>
      <div className='containerWin__menu'>
        <NavLink to='/'>
          <input
            className='containerWin__menu--button'
            type='button'
            value='volver al menú principal'
          />
        </NavLink>
      </div>
    </div>
  );
};
export default Win;
