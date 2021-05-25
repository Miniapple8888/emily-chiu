import {React, Component} from 'react'
import {Button} from './Button'
import './SecondaryButton.scss'

export class SecondaryButton extends Component {

    constructor(props) {
        super(props)
        this.state = { link: this.props.link }
    }

    render() {
        return <Button type="secondary" link={this.state.link}>
            {this.props.children}
        </Button>
    }

}