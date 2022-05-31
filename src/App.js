import React from 'react';
import Navbar from './components/Navbar';
import Window from './components/Window';
import {useSelector} from 'react-redux';
import Proyects from './components/Proyects';
import About from './components/About';
import Skills from './components/Skills';

function App() {
  const interfaz = useSelector(state => state.interfaz);

  return (
    <div className='Portfolio' >
      <Navbar />
      <div className='containerPortfolio' >
        {interfaz === 'HOME' &&     <Window />}
        {interfaz === 'PROYECTS' && <Proyects />}
        {interfaz === 'SKILLS' &&  <Skills />}
        {interfaz === 'ABOUT_ME' && <About />}
      </div>
    </div>
  );
}

export default App;
