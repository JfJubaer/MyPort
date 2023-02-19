import React from 'react';
import { Outlet } from 'react-router-dom';
import Achievement from './Achievement';
import Contact from './Contact';
import Footer from './Footer';
import Nav from './Nav';
import Projects from './Projects';
import Skills from './Skills';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <div style={{ marginTop: '100px', zIndex: '2' }}>
                <Outlet></Outlet>
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