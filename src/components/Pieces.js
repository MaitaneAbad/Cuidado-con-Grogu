import '../styles/layout/pieces.scss';
import Footer from './Footer';
import Menu from './Menu';
import way from '../images/way.png';
import grogu from '../images/grogu.png';
import cookie from '../images/cookie.png';
import frog from '../images/frog.png';
import egg from '../images/egg.png';
const Pieces = () => {
  return (
    <>
      <section className='piecesContainer'>
        <Menu />
        <p className='piecesContainer__title'>
          Tipo de piezas que verás en el juego:
        </p>
        <ul className='piecesContainer__list'>
          <li className='piecesContainer__list--item'>
            <p className='piecesContainer__list--item__title'>Grogu</p>
            <img
              className='piecesContainer__list--item__imgSize'
              src={grogu}
              alt='Grogu en su cuna'
              title='Grog en su cuna'
            />
          </li>
          <li className='piecesContainer__list--item'>
            <p className='piecesContainer__list--item__title'>
              Tres galletas azules
            </p>
            <img
              className='piecesContainer__list--item__img'
              src={cookie}
              alt='Galleta azul'
              title='Galleta azul'
            />
          </li>
          <li className='piecesContainer__list--item'>
            <p className='piecesContainer__list--item__title'>
              Tres ranas de Sorgan
            </p>
            <img
              className='piecesContainer__list--item__img'
              src={frog}
              alt='Rana de Sorgan'
              title='Rana de Sorgan'
            />
          </li>
          <li className='piecesContainer__list--item'>
            <p className='piecesContainer__list--item__title'>
              Tres huevos de Frog Lady{' '}
            </p>
            <img
              className='piecesContainer__list--item__img'
              src={egg}
              alt='Huevo de Frog Lady'
              title='Huevo de Frog LAdy'
            />
          </li>
          <li className='piecesContainer__list--item'>
            <p className='piecesContainer__list--item__title'>
              Seis zonas de carga
            </p>
            <img
              className='piecesContainer__list--item__imgSize'
              src={way}
              alt='Camino'
              title='Camino'
            />
          </li>
          <li className='piecesContainer__list--item'>
            <p className='piecesContainer__list--item__title'>Un armario </p>
          </li>
          <li className='piecesContainer__list--item'>
            <p className='piecesContainer__list--item__title'>
              Tres compartimentos en el armario
            </p>
          </li>
          <li className='piecesContainer__list--item'>
            <p className='piecesContainer__list--item__title'>
              Un dado en forma de botón,con valores entre 1 y 4.
            </p>
          </li>
        </ul>
        <Footer />
      </section>
    </>
  );
};
export default Pieces;
