import React, { useEffect } from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import './AboutMe.css'

export default function AboutMe(props) {

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id)
            return
        Animations.animations.fadeInScreen(props.id)
    }

    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    const SCREEN_CONSTSANTS = {
        description: "A BRIEF INTRODUCTION...",
        highlights: {
            bullets: [
                "Hello, I’m Bo!  I strive to understand everything I do completely to create a more efficient way of producing the same results.  People say that they can depend on me to deliver when I make that commitment.  My impeccable ability to manage time is a quality that I pride myself in.  I managed a group of technicians in my 20’s at Fry’s Electronics.  One of the company’s mottos that stuck with me was: “If you are late, that is unacceptable, if you are on time, you are late, and if you are early, you are on time.”  I faithfully believe in this.  ",
                "In my opinion, when it comes to learning data structures and algorithms, as well different languages in coding, hard work and commitment needs to be adopted.  This is especially true when you are married and have three young children.  ",
                "Living an honest life with integrity is something that I value very much.  My paster once said, “A person with integrity does the right thing even when no one is watching.” ",
                "I enjoy challenges and coming up with a solution to every problem I encounter.  In my opinion, technology is way that we can make our lives more manageable from smart thermometers that tells you when a roast is done to smart devices that allows the elderly to maintain their independence by speaking to it.  As a person who is naturally inclined to helping and serving others, I want to make this world a better place by contributing to the advancement of technology in every aspect of life.  ",
            ],

            // heading: "Here are a Few Highlights:"
        }
    }

    const renderHighlight = () => {
        return (
            SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
                <div className="highlight" key={i}>
                    {/* <div className="highlight-blob"></div> */}
                    <span>{value}</span>
                </div>
            ))
        )
    }


    return (
        <div className="about-me-container screen-container fade-in" id={props.id || ""}>
            <div className="about-me-parent">
                <ScreenHeading title={'About Me'} subHeading={'Why Choose Me?'} />
                <div className="about-me-card">
                    <div className="about-me-profile"></div>
                    <div className="about-me-details">
                        <span className="about-me-description">{SCREEN_CONSTSANTS.description}</span>
                        <div className="about-me-highlights">
                            <div className="highlight-heading">
                                {/* <span>{SCREEN_CONSTSANTS.highlights.heading}</span> */}
                            </div>
                            {renderHighlight()}
                        </div>
                        <div className="about-me-options">
                            <button className='btn primary-btn' onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                                {""}
                                Email Me{" "}
                            </button>
                            <a href='BoSin_Resume.docx' download='Bo Sin Resume'>
                                <button className='btn highlighted-btn'>Get Resume</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
