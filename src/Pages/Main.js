import React from 'react';
import Achievement from './Achievement';
import Contact from './Contact';
import Footer from './Footer';
import Home from './Home';
import Nav from './Nav';
import Projects from './Projects';
import Skills from './Skills';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <div style={{ marginTop: '100px', zIndex: '2' }}>
                <Home></Home>
                <Skills></Skills>
                <Achievement></Achievement>
                <Projects></Projects>
                <Contact></Contact>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;