import { NavLink } from 'react-router-dom';
const Menu = () => {
  return (
    <>
      <article className='game__menu'>
        <NavLink to='/'>
          <input className='game__menu--button' type='button' value='Menú' />
        </NavLink>
      </article>
    </>
  );
};
export default Menu;
