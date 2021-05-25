import {React, Component} from 'react'
import './About.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import {Button} from './Button'
import {PrimaryButton} from './PrimaryButton'

export class About extends Component {

    render() {
        return <div id="about">
            <div className="profile-description">
                <h1>About me</h1>
                <p>
                Hello! I’m a first-year Computer Science student at the University of Waterloo and an aspiring software engineer! I am also the social media coordinator at <a href="https://kurius.ca">Kurius</a>, an organization dedicated to empowering students to create social good through technology! I am currently looking for a <b>Spring 2022 internship</b>!
                </p>
                <p> My goal is to build software that are useful, whether it be in the biomedical, finance or game development field. I love getting my hands on all the aspects of software development: design, front-end, backend!
                </p>
                <p>
                In my free time, I like to code (yes!) on personal projects or hackathons. I also like to draw and play badminton and am a gym enthusiast!
                </p>
                <PrimaryButton link="#projects">View projects <FontAwesomeIcon icon={faAngleDoubleDown} /></PrimaryButton>
            </div>
            <div className="profile-img">
                <div className="img"></div>
            </div>
            
        </div>
    }

}