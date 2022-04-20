import {React, Component} from 'react'
import './About.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import {PrimaryButton} from './PrimaryButton'

var emoji = require('node-emoji')

export class About extends Component {

    render() {
        return <div id="about">
            <div id="about-container">
            <div className="profile-description">
                <h1>{emoji.get('memo')} About me</h1>
                <p>
                Hello! I’m a 2A CS student @ the University of Waterloo, Frontend Developer @ the <a className="hover" target="_blank" rel="noreferrer" href="https://csclub.uwaterloo.ca">Computer Science Club</a>&nbsp;
                 of the University of Waterloo, and Graphic Designer @ <a className="hover" target="_blank" rel="noreferrer" href="https://kurius.ca">Kurius</a>, an organization dedicated to empowering students to create social good through technology! 
                I am currently looking for a <b>Fall 2022 software engineering internship</b>!
                </p>
                <p> My goal is to build software that are useful, whether it be in the biomedical, finance or game development field. 
                    I love getting my hands on all the aspects of software development: design, front-end, & backend!
                </p>
                <p>For instance, I have recently been learning computer vision with Tensorflow for the <a className="hover" target="_blank" rel="noreferrer" href="https://www.uwarg.com/">UWARG bootcamp</a>&nbsp;
                    and following Unity's <a className="hover" target="_blank" rel="noreferrer" href="https://learn.unity.com/course/create-with-code">Create with Code</a>&nbsp; tutorial to make my own games!
                </p>
                <p>
                Aside from hackathons and passion projects, I like to hit the gym, play badminton, draw, and read! 
                I recently finished On the <a className="hover" target="_blank" rel="noreferrer" href="https://www.goodreads.com/book/show/97412.On_the_Shortness_of_Life">Shortness of Life</a>&nbsp; by Seneca and 
                &nbsp;<a className="hover" target="_blank" rel="noreferrer" href="https://www.goodreads.com/book/show/49552.The_Stranger">The Stranger</a>&nbsp; by Albert Camus!
                </p>
                <div className="action"><PrimaryButton link="#projects">View projects <FontAwesomeIcon icon={faAngleDoubleDown} /></PrimaryButton></div>
                
            </div>
            <div className="profile-img">
                <div className="img"></div>
            </div>
            </div>
            
        </div>
    }

}