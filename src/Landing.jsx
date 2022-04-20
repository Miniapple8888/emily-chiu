import { React, Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'

import { PrimaryButton } from './PrimaryButton'
import { SecondaryButton } from './SecondaryButton'
import { SocialMedias } from './SocialMedias'

import './Landing.scss'

var emoji = require('node-emoji')

export class Landing extends Component {

    render() {
        return <div id="landing">
            <h4>{emoji.get('wave')} Hey, I'm</h4>
            <h1>Emily Chiu</h1>
            <h4>CS Student @uWaterloo seeking for a <span class="highlight">Fall 2022 internship!</span></h4>
            <SocialMedias />
            <div className="actions">
                <PrimaryButton link="./CV-EC-EX.pdf">Download resume <FontAwesomeIcon icon={faDownload} /></PrimaryButton>
                <SecondaryButton link="#about">More about me <FontAwesomeIcon icon={faAngleDoubleDown} /></SecondaryButton>
            </div>

        </div>
    }

}