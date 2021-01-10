import React, {Component} from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }


    render(){

        return(
            <div className= 'Contact'>
             <h1>You can reach me</h1>
             <div className='logo'>
                        <div className='gitubLogo'>
                            <a className='logo' href='https://github.com/officialkingwil24' target='blank'>{<FontAwesomeIcon icon={faGithub} size='lg' />}</a>
                        </div>
                        <div className='gitubLogo'>
                            <a className='logo' href='https://www.linkedin.com/in/wilson-pierre-louis-9665531b6/' target='blank'>{<FontAwesomeIcon icon={faLinkedin} size='lg' />}</a>
                        </div>

                        <a href="mailto:wilsonpierrrlouis14@gmail.com">
                            <h1> Email:wilsonpierrrlouis14@gmail.com</h1>
                        </a>
                    </div>
            </div>
        
        )
    }
}



export default Contact;