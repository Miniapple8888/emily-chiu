import {React, Component} from 'react'
import './Project.scss'
import {Skill} from './Skill'

export class Project extends Component {

    constructor(props) {
        super(props)
        this.state = { title: this.props.title, description: this.props.description, image: this.props.image, skills: this.props.skills }
    }

    render() {
        const skillDisplay = this.state.skills.map(skill => <Skill name={skill} />)
        return <div className="project">
            <div className="project-image" style={{backgroundImage: "url(" + this.state.image + ")"}}></div>
            <h2>{ this.state.title }</h2>
            <p>{ this.state.description }</p>
            <div className="skills">{skillDisplay}</div>
        </div>
    }

}