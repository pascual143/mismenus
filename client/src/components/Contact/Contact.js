import React from 'react';
import './Contact.scss';

const Contact = () => {
    return (
        <div>
            <div id="contact-title">
                <h1>Contact</h1>
            </div>
            <div id ="contact-image-holder">
            <div id = "bg-text">
                <p>My name is <span className='highlight'>Chris Jonathan</span></p>
                <p>and I'm a <span className='highlight'>Web Developer</span></p>
                <a href="https://github.com/ChrisJonathan22"><i className="fab fa-github"> ChrisJonathan22</i></a>
            </div>
            </div>
        </div>
    );
}

export default Contact;