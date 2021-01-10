import React, {Component} from 'react';
import './About.css'

class About extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }


    render(){
        return(
            <div className= 'About'>
             <h1> Hello, I'm Wilson Pierre Louis, a Software engineer.</h1>
             <p>Wilson has the strive to become a great software engineer.
                 He is excellent in team environments, loves to work with others and is also a great team leader. 
                 He’s looking for an engineering position where he can grow with a company. 
                 Wilson’s Ultimate future goal is to land a role as a Web developer for a great company.</p>
                    <h2>Here are a few technologies I've been working with recently:
                     <ul>
                         <li>JavaScript</li>
                        <li>Java</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li> React.JS</li>
                        <li>Node.js</li>
                        <li>API</li>
                    </ul> 
                </h2>
            </div>
        )
    }
}
export default About;