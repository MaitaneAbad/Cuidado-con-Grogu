import way from '../images/way.png';
import grogu from '../images/grogu.png';
import cookie from '../images/cookie.png';
import frog from '../images/frog.png';
import egg from '../images/egg.png';
const Pieces = () => {
  return (
    <>
      <p>Tipo d piezas:</p>
      <ul>
        <li>
          <p>Seis zonas de carga</p>
          <img src={way} alt='Camino' title='Camino' />
        </li>
        <li>
          <p>Un armario </p>
        </li>
        <li>
          <p>Tres compartimentos en el armario </p>
        </li>
        <li>
          <p>Tres galletas azules</p>
          <img src={cookie} alt='Galleta azul' title='Galleta azul' />
        </li>
        <li>
          <p>Tres ranas de Sorgan</p>
          <img src={frog} alt='Rana de Sorgan' title='Rana de Sorgan' />
        </li>
        <li>
          <p>Tres huevos de Frog Lady </p>
          <img src={egg} alt='Huevo de Frog Lady' title='Huevo de Frog LAdy' />
        </li>
        <li>
          <p>
            Un dado en forma de botón, que al pulsarlo saldra un número entre 1
            y 4.
          </p>
        </li>
        <li>
          <p>Grogu</p>
          <img src={grogu} alt='Grogu en su cuna' title='Grog en su cuna' />
        </li>
      </ul>
    </>
  );
};
export default Pieces;
