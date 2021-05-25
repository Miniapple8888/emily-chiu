import {React, Component} from 'react'
import './Skill.scss'

export class Skill extends Component {

    constructor(props) {
        super(props)
        this.state = { name: this.props.name }
    }

    render() {
        return <div className="skill btn">
            {this.state.name}
        </div>
    }

}