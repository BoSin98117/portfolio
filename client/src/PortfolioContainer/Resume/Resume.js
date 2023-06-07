import React, { useState } from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import './Resume.css'

export default function Resume(props) {

    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0)
    const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({})

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id)
            return
        Animations.animations.fadeInScreen(props.id)
    }

    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    const ResumeHeading = (props) => {
        return (
            <div className="resume-heading">
                <div className="resume-main-heading">
                    <div className="heading-bullet"></div>
                    <span>{props.heading ? props.heading : ''}</span>
                    {props.fromDate && props.toDate ? (
                        <div className="heading-date">
                            {props.fromDate + "_" + props.toDate}
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
                <div className="resume-sub-heading">
                    <span>{props.subHeading ? props.subHeading : ''}</span>
                </div>
                <div className="resume-heading-description">
                    <span>{props.description ? props.description : ''}</span>
                </div>
            </div>

        )
    }

    const resumeBullets = [
        { label: "Education", logoSrc: "education.svg" },
        { label: "Work History", logoSrc: "work-history.svg" },
        { label: "Programming Skills", logoSrc: "programming-skills.svg" },
        { label: "Projects", logoSrc: "projects.svg" },
        { label: "Interests", logoSrc: "interests.svg" }
    ];

    const programmingSkillDetails = [
        { skill: "JavaScript", ratingPercentage: 85 },
        { skill: "React Js", ratingPercentage: 85 },
        { skill: "MySQL", ratingPercentage: 85 },
        { skill: "Express JS", ratingPercentage: 89 },
        { skill: "Node JS", ratingPercentage: 89 },
        { skill: "Mongo Db", ratingPercentage: 70 },
        { skill: "Java", ratingPercentage: 80 },
        { skill: "HTML", ratingPercentage: 80 },
        { skill: "CSS", ratingPercentage: 80 },
        { skill: "SASS", ratingPercentage: 80 }
    ];

    const projectDetails = [
        {
            title: <a href='https://github.com/BoSin98117/World-Of-BBQ'>
                WORLD OF BBQ
            </a>,
            duration: { fromDate: "2022", toDate: "" },
            description:
                "A bbq site inpsired by the annual Best In The West Nugget Rib Cook-Off in Sparks, NV, United States.",
            subHeading: "Technologies Used: ReactJS, Node.js, MongoDB, BootStrap",
        },
        {
            title: <a href='https://github.com/BoSin98117/Flavr'>
                FLAVR
            </a>,
            duration: { fromDate: "2022", toDate: "" },
            description:
                "Full stack application equipped with a login page where users can share their favorite meals with recipes.",
            subHeading:
                "Technologies Used:  ReactJS, Node.js, MongoDB, BootStrap",
        },
        {
            title: <a href='https://github.com/BoSin98117/Trillo-Flexbox'>
                TRILLO
            </a>,
            duration: { fromDate: "2023", toDate: "" },
            description:
                "A hotel booking website.",
            subHeading:
                "Technologies Used: Javascript, HTML, SASS",
        }
    ];

    const resumeDetails = [
        <div className="resume-screen-container" key="education">
            <ResumeHeading
                heading={"Coding Dojo, Seattle, WA"}
                subHeading={"Full Stack Software Development Bootcamp"}
                fromDate={"Sep 2021"}
                toDate={"Jun 2022"}
            />

            <ResumeHeading
                heading={"Champlain College, Burlington, VT"}
                subHeading={"Bachelor of Science Software Development"}
                fromDate={"Oct 2017"}
                toDate={"Aug 2020"}
            />
        </div>,

        /* WORK EXPERIENCE */
        <div className="resume-screen-container" key="work-experience">
            <div className="experience-container">
                <ResumeHeading
                    heading={"Jai Inc."}
                    subHeading={"Senior Electronics Technician"}
                    fromDate={"May 2003"}
                    toDate={"Oct 2016"}
                />
                <br />
                <ResumeHeading
                    heading={"Quanta Computers"}
                    subHeading={"Hewlett Packard Notebook Technician"}
                    fromDate={"Apr 2002"}
                    toDate={"May 2003"}
                />
                <br />
                <ResumeHeading
                    heading={"Fry's Electronics"}
                    subHeading={"Computer Service Department Manager"}
                    fromDate={"Nov 2000"}
                    toDate={"Feb 2002"}
                />

                {/* <div className="experience-description">
                    <span className="resume-description-text">
                        - Interpreted blueprints and assembly instructions.
                    </span>
                    <br />
                </div> */}
            </div>
        </div>,

        /* PROGRAMMING SKILLS */
        <div
            className="resume-screen-container programming-skills-container"
            key="programming-skills"
        >
            {programmingSkillDetails.map((skill, index) => (
                <div className="skill-parent" key={index}>
                    <div className="heading-bullet"></div>
                    <span>{skill.skill}</span>
                    {/* <div className="skill-percentage">
                        <div
                            style={{ width: skill.ratingPercentage + "%" }}
                            className="active-percentage-bar"
                        ></div>
                    </div> */}
                </div>
            ))}
        </div>,

        /* PROJECTS */
        <div className="resume-screen-container" key="projects">
            {projectDetails.map((projectsDetails, index) => (
                <ResumeHeading
                    key={index}
                    heading={projectsDetails.title}
                    subHeading={projectsDetails.subHeading}
                    description={projectsDetails.description}
                    fromDate={projectsDetails.duration.fromDate}
                    toDate={projectsDetails.duration.toDate}
                />
            ))}
        </div>,

        /* Interests */
        <div className="resume-screen-container" key="interests">
            <ResumeHeading
                heading="Music"
                description="Unwinding to music just to get away from the everyday hussle is my go to.  It places me in a place where I'm relaxed.  "
            />
            <ResumeHeading
                heading="Basketball"
                description="I enjoy being on the court with my son.  He's 10 year's old at the moment and it feels great to just shoot some hoops with him because he enjoys playing as well.  It's our time together. "
            />
            <ResumeHeading
                heading="Beaches"
                description="I love taking my children to the beach.  They love to dip their feets in the water, collecting sea shells, finding interesting creatures there such as hermit crabs, little fishes, and watching the tide go in and out. "
            />
        </div>,
    ];

    const handleCarousal = (index) => {
        let offsetHeight = 360;
        let newCarousalOffset = {
            style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
        };
        setCarousalOffsetStyle(newCarousalOffset);
        setSelectedBulletIndex(index);
    }

    const getBullets = () => {
        return resumeBullets.map((bullet, index) => (
            <div
                onClick={() => handleCarousal(index)}
                className={index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"}
                key={index}
            >
                <img className='bullet-logo'
                    src={require(`../../assets/Resume/${bullet.logoSrc}`)}
                    alt='oops... no internet connection'
                />
                <span className='bullet-label'>{bullet.label}</span>
            </div>
        ))
    }

    const getResumeScreens = () => {
        return (
            <div
                style={carousalOffsetStyle.style}
                className='resume-details-carousal'
            >
                {resumeDetails.map((ResumeDetail) => ResumeDetail)}
            </div>
        )
    }



    return (
        <div className="resume-container screen-container fade-in" id={props.id || ""}>
            <div className="resume-content">
                <ScreenHeading title={'Resume'} subHeading={'My Formal Bio Details'} />
                <div className="resume-card">
                    <div className="resume-bullets">
                        <div className="bullet-container">
                            <div className="bullet-icons"></div>
                            <div className="bullets">{getBullets()}</div>
                        </div>
                    </div>
                    <div className="resume-bullet-details">{getResumeScreens()}</div>
                </div>
            </div>
        </div>
    )
}
