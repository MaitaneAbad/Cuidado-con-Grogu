import '../styles/layout/win.scss';
import { NavLink } from 'react-router-dom';
const Win = (props) => {
  return (
    <div className={`containerWin ${props.win}`}>
      Hemos ganado
      <div>
        <NavLink to='/'>volver al menú principal</NavLink>
      </div>
    </div>
  );
};
export default Win;
