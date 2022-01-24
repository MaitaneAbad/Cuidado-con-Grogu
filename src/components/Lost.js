import '../styles/layout/lost.scss';
import { NavLink } from 'react-router-dom';
const Lost = (props) => {
  return (
    <div className={`containerLost ${props.lost}`}>
      <NavLink to='/'>volver al menú principal</NavLink>
      <div>Hemos Perdido</div>
    </div>
  );
};
export default Lost;
