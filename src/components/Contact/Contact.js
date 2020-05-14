import React from 'react';
import './Contact.css';
import { faFacebook, faGithub, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-info">
                <h4><FontAwesomeIcon icon={faGoogle}/>     Email: pulock.kuet@gmail.com</h4>
                <div className="social">
                    <a href="https://www.facebook.com/dedarulislam.pulock" target="blank">
                        <FontAwesomeIcon icon={faFacebook}/></a>
                    <a href="https://www.github.com/pulocks" target="blank"><FontAwesomeIcon icon={faGithub}/></a>
                    <a href="https://www.linkedin.com/in/dedarul-islam-a572881a3" target="blank">
                        <FontAwesomeIcon icon={faLinkedin}/></a>
                </div>
                
            </div>
            
        </div>
    );
};

export default Contact;