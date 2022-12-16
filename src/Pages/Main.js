import React from 'react';
import { Outlet } from 'react-router-dom';
import Contact from './Contact';
import Footer from './Footer';
import Nav from './Nav';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Main;