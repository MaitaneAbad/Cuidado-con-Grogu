import '../styles/layout/lost.scss';
const Lost = (props) => {
  return (
    <div className={`containerLost ${props.lost}`}>
      {/* <NavLink to='/'>
        <input type='button' value='Volver al menú' />
      </NavLink>{' '} */}
      <div>Hemos Perdido</div>
    </div>
  );
};
export default Lost;
