import React from 'react';
import {useSelector} from 'react-redux';
import AboutMe from './aboutMe';
import Banner from './Banner';
import Contacts from './Contacts';
import Projects from './Projects';

const Content = () => {

    const number = useSelector(state => state.number)

    return (
        <div>
            {number === 1? <Banner /> : null}
            {number === 2? <AboutMe /> : null}
            {number === 3? <Projects /> : null}
            {number === 4? <Contacts /> : null}
        </div>
    );
}
 
export default Content;