import {React, Component} from 'react'
import './SocialMedias.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export class SocialMedias extends Component {

    render() {
        return <div className="social-medias">
            <a className="sm-logo" href="https://github.com/miniapple8888">
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a className="sm-logo" href="https://linkedin.com/in/emilychiu/">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a className="sm-logo" href="mailto:emily.chiu1@uwaterloo.ca">
                <FontAwesomeIcon icon={faEnvelope} />
            </a>
        </div>
    }

}