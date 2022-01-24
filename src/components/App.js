import '../styles/App.scss';

// Fichero src/components/App.js

import { Route, Routes } from 'react-router-dom';
import Landing from './Landing';
import Game from './Game';
import Rules from './Rules';
import Pieces from './Pieces';
import Footer from './Footer';

const App = () => {
  return (
    <div className='body'>
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/pieces' element={<Pieces />}></Route>
        <Route path='/game' element={<Game />}></Route>
        <Route path='/rules' element={<Rules />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
