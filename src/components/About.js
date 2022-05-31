import React from 'react';
import FotoPerfil from '../img/perfil.jpg';

const About = () => {

  return (
    <div className='AboutContainer' >
      <div className='AboutContainer_ContainerImage' >
        <img className='AboutContainer_ContainerImage_image' src={FotoPerfil} alt="Juan David Ramirez Monje" />
      </div>
      <div className='AboutContainer_ContainerText' >
        <h2 className='window__containerText_textColor' > Hey. What's Up? Hello! 👋 </h2>
        <br/>
        <p> I’m Juan David Monje from Bogotá Colombia, a web developer and student of machine learning, passionate about research and learning. </p>
        <br/>
        <p className='window__containerText_textColor' ><strong>Develop is what I live for.</strong> </p>
        <br/>
        <p> But when I'm not developing software, i loved practice sports, in specific soccer, keeping an active body is a requirement for my mind. My other passions in the life is Learning and teaching and my life objective everyday is the productivity. </p>
        <br/>
        <p> Currently, I am a Frontend Developer at Akelab, a startup dedicated to knowledge management in Colombia.</p>
        <button className='button__global'>
          <p>Resume</p>
        </button>
        <button className='button__global' >
          <p>Linkedin</p>
        </button>
      </div>
    </div>
  );
}
 
export default About;