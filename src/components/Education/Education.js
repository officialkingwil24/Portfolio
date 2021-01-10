import React, {Component} from 'react';
import './Education.css';

class Education extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }


    render(){

        return(
            <div className= 'Education'>
             <h1>Education</h1>
                    <h2>Software Engineering</h2>
                    <h3>Nebula Academy</h3>
                    <p>09/2020 - 12/2020</p>
                     <ul>
                        <li>Software engineering bootcamp with a focus on full-stack web development</li>
                        <li>Collaborated with peers to learn software engineering in a project based manner</li>
                        <li>Fully immersive program that required 65+ hours a week of development</li>
                    </ul> 
            </div>
        
        )
    }
}

export default Education;