import React from 'react';

// import Typical from 'react-typical';
import Typewriter from "typewriter-effect";

import ScrollService from '../../../utilities/ScrollService';

import "./Profile.css";

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <div className="colz-icon">
                            <a href='https://github.com/BoSin98117'>
                                <i className='fa fa-github'></i>
                            </a>
                            <a href='https://www.linkedin.com/in/bosin98117/'>
                                <i className='fa fa-linkedin'></i>
                            </a>
                        </div>
                    </div>

                    <div className="profile-details-name">
                        <span className="primary-text">
                            {" "}
                            Hello, I'm <span className='highlighted-text'>Bo</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className="primary-text">
                            {" "}
                            <h1>
                                {" "}
                                <Typewriter
                                    options={{
                                        strings: [
                                            'Full Stack Developer',
                                            'React Js',
                                            'Node.js',
                                            'MongoDB'
                                        ],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </h1>
                            <span className="profile-role-tagline">
                                Knack of building applications with front and back end operations.
                            </span>
                        </span>
                    </div>
                    <div className="profile-options">
                        <button className='btn primary-btn' onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                            {""}
                            Email Me{" "}
                        </button>
                        <a href='Bo_Sin_Resume.docx' download='Bo Sin Resume'>
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background">

                    </div>
                </div>
            </div>
        </div>
    )
}


