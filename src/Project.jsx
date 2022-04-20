import {React, Component} from 'react'
import './Project.scss'
import {Skill} from './Skill'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export class Project extends Component {

    constructor(props) {
        super(props)
        this.state = { title: this.props.title, description: this.props.description, image: this.props.image, skills: this.props.skills, github: this.props.github, link: this.props.link }
    }

    render() {
        const skillDisplay = this.state.skills.map(skill => <Skill name={skill} />)
        return <a href={this.state.github} target="_blank" rel="noreferrer" className="project">
            <div class="project-img-container">
            <div className="project-image" style={{backgroundImage: "url(" + this.state.image + ")"}}></div>
            </div>
            <h2>{ this.state.title }
            <a href={this.state.github} target="_blank" rel="noreferrer" className="github"><FontAwesomeIcon icon={faGithub} /></a>
            <a href={this.state.link} target="_blank" rel="noreferrer" className="link"><FontAwesomeIcon icon={faLink} /></a>
            </h2>
            <p>{ this.state.description }</p>
            <div className="skills">{skillDisplay}</div>
        </a>
    }

}