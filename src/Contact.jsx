import {React, Component} from 'react'
import './Contact.scss'
import { SocialMedias } from './SocialMedias'

var emoji = require('node-emoji')

export class Contact extends Component {

    render() {
        return <div id="contact">
            <h1>{emoji.get('incoming_envelope')} Contact me</h1>
            <h4>Have a cool opportunity to share or just want to chat? Feel free to reach out to me!</h4>
            <SocialMedias />
        </div>
    }

}