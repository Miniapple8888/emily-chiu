import {React, Component} from 'react'
import './Projects.scss'
import {Project} from './Project'

export class Projects extends Component {

    constructor(props) {
        super(props)
        this.state = { projects: [
            {
                img: './hackitforward.png',
                title: 'HackItForward',
                description: 'Web app that offers up-and-coming developers a platform to work on real-world projects through challenges presented by organizations. ',
                skills: ['django', 'javascript', 'css', 'html']
            },
            {
                img: './mapic.png',
                title: 'MaPic',
                description: 'A crowd sourced photography location finder based on Google Cloud image recognition keywords.',
                skills: ['vue', 'express', 'node', 'css']
            },
            {
                img: './icovid.png',
                title: 'iCovid',
                description: 'Live Web and AR Simulation of forecasted COVID19 cases.',
                skills: ['vue', 'express', 'node', 'chart.js']
            }
        ] }
    }

    render() {
        const projects = this.state.projects.map(project => <Project title={project.title} description={project.description} image={project.img} skills={project.skills} />)
        return <div id="projects">
            <h1>Projects</h1>
            <div id="projects-listing">
                { projects }
            </div>
        </div>
    }

}