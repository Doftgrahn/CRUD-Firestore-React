import React from 'react';

import '../styles/info.scss';


const AboutMe = () => {
    return (<section>

          <div className="content_container">

            <div className="wrapper">
              <h3>Hello. I'm Simon</h3>
              <span>Hope you liked what i´ve done!</span>
            </div>

            <div className="wrapper">
              <span>I love Programming!</span>
              <p>
                I love to evolve and learn new stuff all the time but also solve problems that i encounter</p>
            </div>

            <div className="wrapper">
              <span>Here are some links to check out my work!</span>
              <ul>
                <li><a href="https://github.com/Doftgrahn" target="_blank" rel="noopener noreferrer">Github</a></li>
                <li><a href="https://linkedin.com/in/simon-grahn-06994797" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
                <li><a href="https://dribbble.com/doftgrahn" target="_blank" rel="noopener noreferrer">Dribble</a></li>
              </ul>
            </div>

          </div>



        </section>)
}



export default AboutMe;
