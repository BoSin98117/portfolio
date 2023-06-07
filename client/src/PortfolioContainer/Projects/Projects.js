import React from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'

import './Projects.css'

import Me from '../../assets/AboutMe/me.jpg'

import BBQ from '../../images/worldofbbq.gif'
import Natours from '../../images/natours2.gif'
import Nexter from '../../images/nextor4.gif'
import Trillo from '../../images/trillo1.gif'
import Flavr from '../../images/flavr.jpg'


export default function Projects(props) {

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id)
            return
        Animations.animations.fadeInScreen(props.id)
    }

    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)


    return (
        <div className="projects-container fade-in" id={props.id || ""}>
            <div className="projects-parent">
                <ScreenHeading
                    title={'Projects'} subHeading={'Check Out My Projects'}
                />

                <div className="project-images">
                    <div>
                        <img src={BBQ} alt="no img" width="320" height="240" className='project_video' />
                    </div>

                    <div>
                        <img src={Flavr} alt="no img" width="320" height="240" className='project_video' />
                    </div>

                    <div>
                        <img src={Natours} alt="no img" width="320" height="240" className='project_video' />
                    </div>

                    <div>
                        <img src={Nexter} alt="no img" width="320" height="240" className='project_video' />
                    </div>

                    <div>
                        <img src={Trillo} alt="no img" width="320" height="240" className='project_video' />
                    </div>

                </div>
            </div>
        </div>
    )
}
