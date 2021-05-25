import {React, Component} from 'react'
import './Button.scss'

export class Button extends Component {

    constructor(props) {
        super(props)
        this.state = { link: this.props.link, type: this.props.type }
    }

    render() {
        const classNames = "btn "+this.state.type
        return <a className={classNames} href={this.state.link}>
            {this.props.children}
        </a>
    }

}