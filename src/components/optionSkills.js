import React,{useState} from 'react';

const OptionSkills = ({proyect}) => {

  const [Hover, setHover] = useState(false);

  return (
    <div
      className='containerPortfolio__Skills__containerItems__item'
      onMouseDown={() => setHover(false)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
    <p> {Hover ? proyect.percentaje :proyect.name}</p>
  </div>
  );
}
 
export default OptionSkills;