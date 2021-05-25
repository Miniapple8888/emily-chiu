import {React, Component} from 'react'
import {Button} from './Button'
import './PrimaryButton.scss'

export class PrimaryButton extends Component {

    constructor(props) {
        super(props)
        this.state = { link: this.props.link }
    }

    render() {
        return <Button type="primary" link={this.state.link}>
            {this.props.children}
        </Button>
    }

}