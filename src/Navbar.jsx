import {React, Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload} from '@fortawesome/free-solid-svg-icons'
import './Navbar.scss'
import {Button} from './Button'

export class Navbar extends Component {

    constructor(props) {
        super(props)
        this.state = {currentClass: 'transparent'}
    }

    componentDidMount() {
        document.addEventListener('scroll', this.toggleClassNavbar.bind(this))
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.toggleClassNavbar.bind(this))
    }

    toggleClassNavbar() {
        const currentClassLabel = (window.scrollY >= 125) ? 'solid' : 'transparent'
        console.log(currentClassLabel)
        this.setState({currentClass: currentClassLabel})
    }

    render() {
        return <div id="navbar" className={this.state.currentClass}>
            <div className="brand">
                <a href="#landing"><h1>EC</h1></a>
            </div>
            <div className="collapseable">
                <div className="nav-item"><a href="#about">About</a></div>
                <div className="nav-item"><a href="#projects">Projects</a></div>
                <div className="nav-item"><a href="#contact">Contact</a></div>
                <div className="nav-item"><Button link="#">Download resume <FontAwesomeIcon icon={faDownload} /></Button></div>
            </div>
        </div>
    }

}