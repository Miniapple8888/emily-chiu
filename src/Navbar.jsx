import {React, Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faBars, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import './Navbar.scss'
import {Button} from './Button'
import { ThemeContext, themes } from './contexts/ThemeContext'

export class Navbar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentClass: 'transparent',
            collapsedState: 'collapseable',
            toggleMenu: 'toggle-menu',
            hamburgerState: '',
            darkMode: true
        }
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
        const mobileWidth = window.innerWidth <= 700
        const currentCollapsedState = mobileWidth ? 'collapsed' : 'collapseable'
        const currentToggleMenu = mobileWidth ? 'toggled-menu' : 'toggle-menu'
        const currentHamburgerState = mobileWidth ? '' : ''
        this.setState({collapsedState: currentCollapsedState, toggleMenu: currentToggleMenu, hamburgerState: currentHamburgerState})
        this.toggleClassNavbar()
    }

    toggleMenu(e) {
        e.preventDefault()
        const currentCollapsedState = (this.state.collapsedState === "collapsed toggled") ? "collapsed" : "collapsed toggled"
        const currentClass = (this.state.collapsedState === "collapsed toggled") ? "transparent" : "solid"
        const currentHamburgerState = (this.state.hamburgerState == "toggle-hamburger") ? "" : "toggle-hamburger"
        this.setState({collapsedState: currentCollapsedState, currentClass: currentClass, hamburgerState: currentHamburgerState })
        this.toggleClassNavbar()
    }

    render() {
        return <div id="navbar" className={this.state.currentClass}>
            <div className="brand">
                <a href="#landing"><h1>EC</h1></a>
            </div>
            <div id="toggle-menu" className={this.state.toggleMenu}>
                <button className={this.state.hamburgerState} href="#" onClick={this.toggleMenu.bind(this)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <div className={this.state.collapsedState}>
                <div className="nav-item">
                    <ThemeContext.Consumer>
                        {({ changeTheme }) =>(
                            <button id="toggle-darkmode"
                                onClick={() => {
                                    console.log(this.state.darkMode)
                                    changeTheme(!this.state.darkMode ? themes.dark : themes.light)
                                    this.setState({darkMode: !this.state.darkMode})
                                }}>
                                {this.state.darkMode ? 
                                    <FontAwesomeIcon icon={faMoon} /> :
                                    <FontAwesomeIcon icon={faSun} />
                                }
                            </button>
                        )}
                    </ThemeContext.Consumer>
                </div>
                <div className="nav-item"><a href="#about" className="hover">About</a></div>
                <div className="nav-item"><a href="#projects" className="hover">Projects</a></div>
                <div className="nav-item "><a href="#contact" className="hover">Contact</a></div>
                <div className="nav-item action">
                    <Button link="./CV-EC-EX.pdf">Download resume <FontAwesomeIcon icon={faDownload} /></Button>
                </div>
            </div>
        </div>
    }

}