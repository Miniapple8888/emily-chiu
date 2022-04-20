import {React, Component} from 'react'
import './Projects.scss'
import {Project} from './Project'

var emoji = require('node-emoji')

export class Projects extends Component {

    constructor(props) {
        super(props)
        this.state = { projects: [
            {
                img: './MealTime.png',
                title: 'MealTime',
                description: 'Mobile app that generates weekly meal plans according to the user\'s eating preferences.',
                skills: ['kotlin', 'android studio', 'xml'],
                github: 'https://github.com/Miniapple8888/MealTime',
            },
            {
                img: './csclub.png',
                title: 'UW CSC\'s Website',
                description: 'The University of Waterloo\'s Computer Science Club\'s website.',
                skills: ['next.js', 'react', 'typescript', 'html', 'css'],
                github: 'https://git.csclub.uwaterloo.ca/www/www-new',
                link: 'https://csclub.uwaterloo.ca/',
            },
            {
                img: './hackitforward.png',
                title: 'HackItForward',
                description: 'Web app that offers up-and-coming developers a platform to work on real-world projects through challenges presented by organizations. ',
                skills: ['django', 'javascript', 'sqlite', 'css', 'html'],
                github: 'https://github.com/Miniapple8888/HackItForward',
                link: 'https://hackitforward.com',
            },
            {
                img: './mapic.png',
                title: 'MaPic',
                description: 'A crowd sourced photography location finder based on Google Cloud image recognition keywords.',
                skills: ['vue', 'express', 'node', 'css'],
                github: 'https://github.com/Miniapple8888/TOHacks2021',
                link: 'https://mapic.tech'
            },
            {
                img: './icovid.png',
                title: 'iCovid',
                description: 'Live Web and AR Simulation of forecasted COVID19 cases.',
                skills: ['vue', 'express', 'node', 'chart.js'],
                github: 'https://github.com/Miniapple8888/iCovid-MariHacks',
                link: 'https://unruffled-keller-faf15c.netlify.app/'
            },
            {
                img: './langr.png',
                title: 'Langr',
                description: 'Web app that connects users with similar interests and language preferences',
                skills: ['vue', 'express', 'sequelize', 'node', 'postgresql'],
                github: 'https://github.com/Miniapple8888/BrebeufHx2nd',
            }
        ] }
    }

    render() {
        const projects = this.state.projects.map(project => <Project title={project.title} description={project.description} image={project.img} skills={project.skills} github={project.github} link={project.link} />)
        return <div id="projects">
            <h1>{emoji.get('rocket')} Featured Projects</h1>
            <div id="projects-listing">
                { projects }
            </div>
        </div>
    }

}