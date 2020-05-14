import React from 'react';
import './Header.css';
import image from '../../images/pulock0000.jpg';

const Header = () => {
    return (

        <div>
            <div className="header d-flex flex-column align-items-center">
                <div className="header-img">
                    <img className="rounded-circle img-thumbnail" src={image} alt=""/>
                </div>
                <div className="header-info text-center">
                    <h3 style={{color: 'green'}}>Hello! I am Dedarul Islam Pulock</h3>
                    <h4 style={{color: 'blue'}}>I write HTML, CSS and JavaScript code for building Website</h4>
                </div>
            </div>
            <div className="navigation">
                <nav className="bg-black d-flex justify-content-center">
                
                    <a className="nav-item nav-link" href="/">ABOUT ME</a>
                    <a className="nav-item nav-link" href="/projects">PROJECTS</a>
                    <a className="nav-item nav-link" href="/contact">CONTACT</a>
             
                </nav>

            </div>
        </div>

    );
};

export default Header;