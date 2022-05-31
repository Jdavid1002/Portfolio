import React from 'react';
import Bimo from '../img/bimo.jpg';
import Lucky from '../img/lucky.png';
import CardProyects from './CardProyects';
import ChatReact from '../img/chat.jpg';
import Kiqui from '../img/kiqui.jpg';

const Proyects = () => {

  return (
    <div className='containerPortfolio__Proyect' >
      <CardProyects 
        img={Bimo}
        alt='Bimo'
        codeLink={'https://github.com/Jdavid1002/Bimo'}
        demoLink={'https://jdavid1002.github.io/Bimo/#/'}
      />
      <CardProyects 
        img={Lucky}
        alt='LuckySongs'
        codeLink={'https://github.com/Jdavid1002/Lucky-Songs'}
        demoLink={'https://jdavid1002.github.io/Lucky-Songs/#/'}
      />
      <CardProyects 
        img={ChatReact}
        alt='ChatReact'
        codeLink={'https://github.com/Jdavid1002/Chat-React'}
        demoLink={'https://jdavid1002.github.io/Chat-React/#/'}
      />
      <CardProyects 
        img={Kiqui}
        alt='Kiqui'
        codeLink={'https://github.com/Jdavid1002/Kiqui'}
        demoLink={'https://boiling-sierra-67699.herokuapp.com/'}
      />
    </div>
  );
}
 
export default Proyects;