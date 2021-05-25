import {React, Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faBars } from '@fortawesome/free-solid-svg-icons'
import './Navbar.scss'
import {Button} from './Button'

export class Navbar extends Component {

    constructor(props) {
        super(props)
        this.state = {currentClass: 'transparent', collapsedState: 'collapseable', toggleMenu: 'toggle-menu'}
    }

    componentDidMount() {
        document.addEventListener('scroll', this.toggleClassNavbar.bind(this))
        window.addEventListener('resize', this.toggleCollapsedState.bind(this))
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.toggleClassNavbar.bind(this))
        window.removeEventListener('resize', this.toggleCollapsedState.bind(this))
    }

    toggleClassNavbar() {
        const currentClassLabel = (window.scrollY >= 125) ? 'solid' : 'transparent'
        this.setState({currentClass: currentClassLabel})
    }

    toggleCollapsedState() {
        console.log("executed")
        const currentCollapsedState = (window.innerWidth <= 700) ? 'collapsed' : 'collapseable'
        const currentToggleMenu = (window.innerWidth <= 700) ? 'toggled-menu' : 'toggle-menu'
        this.setState({collapsedState: currentCollapsedState, toggleMenu: currentToggleMenu})
    }

    toggleMenu(e) {
        e.preventDefault()
        const currentCollapsedState = (this.state.collapsedState == "collapsed toggled") ? "collapsed" : "collapsed toggled"
        const currentClass = (this.state.collapsedState == "collapsed toggled") ? "transparent" : "solid"
        this.setState({collapsedState: currentCollapsedState, currentClass: currentClass })
    }

    render() {
        return <div id="navbar" className={this.state.currentClass}>
            <div className="brand">
                <a href="#landing"><h1>EC</h1></a>
            </div>
            <div className={this.state.toggleMenu}><a href="#" onClick={this.toggleMenu.bind(this)}><FontAwesomeIcon icon={faBars} /></a></div>
            <div className={this.state.collapsedState}>
                <div className="nav-item"><a href="#about">About</a></div>
                <div className="nav-item"><a href="#projects">Projects</a></div>
                <div className="nav-item"><a href="#contact">Contact</a></div>
                <div className="nav-item action"><Button link="#">Download resume <FontAwesomeIcon icon={faDownload} /></Button></div>
            </div>
        </div>
    }

}