import {React, Component} from 'react'
import './Contact.scss'
import { SocialMedias } from './SocialMedias'

export class Contact extends Component {

    render() {
        return <div id="contact">
            <h1>Contact me</h1>
            <h4>Feel free to reach me out for a talk!</h4>
            <SocialMedias />
        </div>
    }

}