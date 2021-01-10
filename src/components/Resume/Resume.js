import React, {Component} from 'react';
import './Resume.css'
import resume from './WPLresume.png'
class Resume extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }


    render(){

        return(
            <div className= 'Resume'>
             <img src= {resume}/>
            </div>
        )
    }
}

export default Resume;