import React,{useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import ReactTyped from 'react-typed';

const Window = () => {

  const dispatch = useDispatch();
  const [startText, setstartText] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setstartText(true);
    }, 1000);

    setTimeout(() => {
      dispatch({
        type: 'SET_FLAG_START',
        payload: true
      })
    }, 2500);

    // eslint-disable-next-line
  }, []);

  return (
    <div className='containerPortfolio__window' >
      {startText && 
        <div className='window__containerText' >
          <h1> Welcome to my portfolio </h1>
          <p className='window__containerText_textColor' >
            <ReactTyped
              loop
              typeSpeed={50}
              backSpeed={40}
              strings={["Hi! my name is David!", "I'm Frontend Developer", "And machine learning student." ]}
              smartBackspace
              shuffle={false}
              backDelay={1}
              fadeOut={false}
              fadeOutDelay={100}
              loopCount={0}
              showCursor
              cursorChar="|"
            />
          </p>
        </div>
      }

    </div>
  );
}
 
export default Window;