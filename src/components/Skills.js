import React from 'react'
import OptionSkills from './optionSkills';


const Skills = () => {

  const Skills = [
    {
      Title : 'Frontend',
      type : "Frontend",
      order : 1,
      skills : [
        {
          id: "f1",
          name: 'HTML5',
          percentaje: '90%',
        },
        {
          id: "f2",
          name: 'CSS3',
          percentaje: '80%',
        },
        {
          id: "f3",
          name: 'JavaScript',
          percentaje: '70%',
        },
        {
          id: "f4",
          name: 'React',
          percentaje: '70%',
        },
        {
          id: "f5",
          name: 'Sass',
          percentaje: '60%',
        },
        {
          id: "f6",
          name: 'Redux',
          percentaje: '80%'
        }
      ]
    },
    {
      Title : 'Machine Learning',
      type : "IA",
      order : 2,
      skills : [
        {
          id: "I1",
          name: 'Python',
          percentaje: '50%'
        },
        {
          id: "I2",
          name: 'AWS - Lambda Functions',
          percentaje: '50%'
        },
      ]
    },
    {
      Title : 'Backend',
      type : "Backend",
      order : 3,
      skills : [
        {
          id: "B1",
          name: 'Node.js',
          percentaje: '60%'
        },
        {
          id: "B2",
          name: 'SQL',
          percentaje: '75%'
        },
        {
          id: "B3",
          name: 'AWS - Amplify',
          percentaje: '85%'
        },
        {
          id: "B4",
          name: 'Oracle',
          percentaje: '80%'
        },
        {
          id: "B5",
          name: 'Python',
          percentaje: '60%'
        },
      ]
    }
  ];

  return (
    <div className='containerPortfolio__Skills' >
      {Skills.map(item => 
        <div>
          <h2 className='containerPortfolio__Skills__title' > {item.Title} </h2>
          <div
            className='containerPortfolio__Skills__containerItems'
          >
            {item.skills.map(proyect => {
              return (
                <OptionSkills 
                  key={proyect.id}
                  proyect={proyect}
                />
              )
            })}
          </div>
        </div>
      )}
    </div>
  );
}
 
export default Skills;