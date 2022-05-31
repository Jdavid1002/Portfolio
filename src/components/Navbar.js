import React from 'react';
import { useSelector , useDispatch} from 'react-redux';

import '../css/Navbar.css';

const Navbar = () => {
  const flagStart = useSelector(state => state.flagStart);
  const dispatch = useDispatch();

  const updateInterfaz = (type) => {
    dispatch({
      type: 'UPDATE_INTERFAZ',
      payload: type
    });
  };

  if(flagStart){
    return (
      <div className='containerNavbar' >
        <p className='containerNavbar_options' onClick={() => updateInterfaz('HOME')} >Home </p>
        <p className='containerNavbar_options' onClick={() => updateInterfaz('PROYECTS')} >Proyects </p>
        <p className='containerNavbar_options' onClick={() => updateInterfaz('SKILLS')} > Skills </p>
        <p className='containerNavbar_options' onClick={() => updateInterfaz('ABOUT_ME')} >About Me </p>
      </div>
    );
  }else{
    return null;
  }
}
 
export default Navbar;