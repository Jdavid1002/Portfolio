import React from 'react'


const CardProyects = ({img, alt, demoLink, codeLink}) => {
  return (
    <div className='containerPortfolio__Proyect_card' >
      <img className='containerPortfolio__Proyect_card_img' src={img} alt={alt} />
      <div className='containerPortfolio__Proyect_card_footer' >
        <button className='button__global' onClick={() => window.open(demoLink)} >
          <p>Demo</p>
        </button>
        <button className='button__global' onClick={() => window.open(codeLink)} >
          <p>Code</p>
        </button>
      </div>
    </div>
  );
}
 
export default CardProyects;