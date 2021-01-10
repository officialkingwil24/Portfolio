import React, { Component } from 'react';
import './Portfolio.css'

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: 'All Projects'
        };
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange = (event) => {
        this.setState({ filter: event.target.innerText })
    }

    createCards = () => {
        const allProjects = [
            {
                url: 'https://officialkingwil24.github.io/Calculator-Project/',
                title: 'Calculator',
                tech: ['JavaScript', ', HTML', ', CSS', ', ES5', 'All Projects'],
                img: '/Assets/Calculator.png'
            },
            {
                url: 'http://willstreetfighter.s3-website-us-east-1.amazonaws.com/',
                title: 'Street Fighter',
                tech: ['React', ', JSX', ', JavaScript', ', CSS', ', PostgreSQL', ', Express.js', 'All Projects'],
                img: '/Assets/Streetfighter.png'
            },
            {
                url: 'https://officialkingwil24.github.io/Netflix/',
                title: 'Netflix',
                tech: ['React', ', HTML', ', CSS', ', JavaScript', ', FullStack', 'All Projects'],
                img: '/Assets/Netflix.png'
            }
        ];
        return (
            allProjects // all projects to be filtered and put on the website
                .map((projects, index) => { // now that we have filtered out some projects rendar them to the page
                    return ( // build the html by using dynamic properties
                        <div
                            key={index}
                            className={!projects.tech.includes(this.state.filter) ? 'projectCard shrink' : 'projectCard grow'}
                            style={{ backgroundImage: `url(${projects.img || this.state.backgroundImage})` }}>

                            <a href={projects.url} className='projectsLink'>

                                <img className='projectImage' alt={projects.title} src={projects.img} />
                                <div className='bar'>{projects.title}</div>

                                {/* <p className='cardDesc'>{projects.desc}</p> */}
                                <div className='technologies'><ul>{projects.tech.map((tech, index) => {
                                    return tech !== 'All Projects' ? <li key={index} value={tech} onClick={this.handleInputChange}>{tech}</li> : ''
                                })}</ul>
                                </div>
                            </a>
                        </div>
                    )
                })
        )
    }

    render() {
        return (
            <div className="Portfolio" name="Portfolio">
                <h1 className="selectionHead">Web Developer Portfolio</h1>
                <ul className="filter">
                    <li onClick={this.handleInputChange}>React</li>
                    <div>|</div>
                    <li onClick={this.handleInputChange}>HTML</li>
                    <div>|</div>
                    <li onClick={this.handleInputChange}>JavaScript</li>
                    <div>|</div>
                    <li onClick={this.handleInputChange}>FullStack</li>
                    <div>|</div>
                    <li onClick={this.handleInputChange}>All Projects</li>
                </ul>
                <h3>Some Of My Projects</h3>
                <div className="projects">
                    {this.createCards()}
                </div>
            </div>
        )
    }
}
export default Portfolio;