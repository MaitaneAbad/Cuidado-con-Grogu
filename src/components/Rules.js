import '../styles/layout/rules.scss';
import Menu from './Menu';
import cookie from '../images/cookie.png';
import frog from '../images/frog.png';
import egg from '../images/egg.png';
import grogu from '../images/grogu.png';
import Footer from './Footer';
const Rules = () => {
  return (
    <>
      <section className='rulesContainer'>
        <Menu />
        <h2 className='rulesContainer__title'>Misión</h2>
        <article className='rulesContainer__resumen'>
          <p>
            El cazarrecompensas mandaloriano Din Djarin, conocido como «el
            Mandaloriano» o simplemente «Mando», está a cargo de Grogu mientras
            viaja por la galaxia realizando todo tipo de encargos. En esta
            ocasión el encargo es muy especial. Debe entregar huevos de rana, no
            fertilizados, galletas azules, ¡qué ricas! y unas ranas. Todo ello
            es muy importante ya que este cargamento es de vital importancia
            para restablecer contacto con Ahsoka Tano. El objetivo es entregar
            la mercancía a un contacto en el planeta Nevarro. Él nos dará la
            información del paradero de Ahsoka, información que usaremos para
            volver a intentar que sea la maestra de Grogu como Jedi. El problema
            es que nuestro contacto ha sido muy claro, si no llega la mercancía
            no hay trato. Tu misión es tratar que Grogu no encuentre la
            mercancía. Mando ha recibido muy buenas recomendaciones sobre tus
            habilidades custodiando mercancía así que ha decidido contratarte
            para que todo salga bien. Ayuda a Mando a conseguir su objetivo y
            tendrás una buena recompensa.
          </p>
        </article>
        <article className='rulesContainer__rules'>
          <h3 className='rulesContainer__rules--title'>Reglas del juego:</h3>
          <div className='rulesContainer__rules--way'>
            <p className='rulesContainer__rules--way__paragraph'>
              Dispondremos de 6 casillas que representan un camino en la zona de
              carga de la Razor Crest que lleva hasta el armario donde se
              encuentra segura la mercancía.El juego es muy sencillo. De este
              modo tendremos 7 casillas, 6 del camino y una que representa al
              armario:
            </p>
            <div className='rulesContainer__rules--way__span'>
              {' '}
              🔲🔲🔲🔲🔲🔲❎{' '}
            </div>
          </div>
          <p className='rulesContainer__rules--paragraph'>
            Durante el viaje has hecho muy bien tu trabajo pero ahora debes
            vaciar el armario. Para ello deberás descargar la mercancía poco a
            poco. Este es el momento más delicado ya que Grogu puede aprovechar
            y llegar hasta el armario. Si eso ocurre se comerá lo que encuentre
            y Mando perderá la oportunidad de saber dónde esta Ahsoka. Ergo, te
            has quedado sin recompensa.
          </p>
          <div className='rulesContainer__rules--pieces'>
            <h3 className='rulesContainer__rules--pieces__title'>
              Además de esas 7 piezas tendrás tres recipientes donde se guarda
              cada tipo de mercancía. De esta manera quedaría:
            </h3>
            <ul>
              <li className='rulesContainer__rules--pieces__item'>
                Recipiente de las galletas: Tendrá 3 cajas de galletas azules
                dentro
              </li>
              <li className='rulesContainer__rules--pieces__item'>
                Recipiente de los huevos de rana: Tendrá dentro 3 huevos de rana
                de Frog Lady, sin fertilizar
              </li>
              <li className='rulesContainer__rules--pieces__item'>
                Recipiente de las ranas: Tendrá dentro 3 ranas
              </li>
            </ul>
            <h3 className='rulesContainer__rules--pieces__title'>
              Además de estas piezas tendremos un dado de 4 caras donde cada
              cara representa una de las siguientes acciones:
            </h3>
            <ul>
              <li className='rulesContainer__rules--pieces__item'>
                <p className='rulesContainer__rules--pieces__item--title'>
                  Descargas una caja de galletas azules
                </p>
                <img
                  className='rulesContainer__rules--pieces__item--img'
                  src={cookie}
                  alt='Galleta azul'
                  title='Galleta azul'
                />
              </li>
              <li className='rulesContainer__rules--pieces__item'>
                <p className='rulesContainer__rules--pieces__item--title'>
                  Descargas un huevo de rana de Frog Lady, con mucho cuidado
                </p>
                <img
                  className='rulesContainer__rules--pieces__item--img'
                  src={egg}
                  alt='Huevo de Frog Lady'
                  title='Huevo de Frog Lady'
                />
              </li>
              <li className='rulesContainer__rules--pieces__item'>
                <p className='rulesContainer__rules--pieces__item--title'>
                  Descargas una rana
                </p>
                <img
                  className='rulesContainer__rules--pieces__item--img'
                  src={frog}
                  alt='Rana de Sorgan'
                  title='Rana de Sorgan'
                />
              </li>
              <li className='rulesContainer__rules--pieces__item'>
                <p className='rulesContainer__rules--pieces__item--title'>
                  {' '}
                  Grogu se mueve una casilla{' '}
                </p>
                <img
                  className='rulesContainer__rules--pieces__item--img'
                  src={grogu}
                  alt='Grogu en su cuna'
                  title='Grogu en su cuna'
                />
              </li>
              <li className='rulesContainer__rules--pieces__item'>
                Además habrá una ficha que represente dónde está Grogu.
              </li>
            </ul>
          </div>
        </article>
        <article className='rulesContainer__objective'>
          <h2 className='rulesContainer__objective--win'>
            Ganarás el juego si consigues descargar toda la mercancía.
          </h2>
          <h2>Perderás si Grogu llega a la última casilla, el armario.</h2>
        </article>
      </section>
      <Footer />
    </>
  );
};
export default Rules;
