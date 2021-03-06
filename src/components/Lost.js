import '../styles/layout/lost.scss';
import { NavLink } from 'react-router-dom';
const Lost = (props) => {
  return (
    <div className={`containerLost ${props.lost}`}>
      <p className='containerLost__title'>
        Ohhh, ¡Grogu se ha comido todo!, Vuelve a intentarlo
      </p>
      <div className='containerLost__menu'>
        <NavLink to='/'>
          <input
            className='containerLost__menu--button'
            type='button'
            value='volver al menú principal'
          />
        </NavLink>
      </div>{' '}
    </div>
  );
};
export default Lost;
