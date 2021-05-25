import {React, Component} from 'react'
import './Landing.scss'
import {Button} from './Button'
import {SecondaryButton} from './SecondaryButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import { SocialMedias } from './SocialMedias'

export class Landing extends Component {

    render() {
        return <div id="landing">
            <h1>Emily Chiu</h1>
            <h4>CS Student & Aspiring Software Engineer</h4>
            <SocialMedias />
            <div className="actions">
                <Button link="#">Download resume <FontAwesomeIcon icon={faDownload} /></Button>
                <SecondaryButton link="#about">More about me <FontAwesomeIcon icon={faAngleDoubleDown} /></SecondaryButton>
            </div>
            
        </div>
    }

}