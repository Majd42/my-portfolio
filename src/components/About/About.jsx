import React from 'react'
import './styles.css'
import {Link} from 'react-router-dom'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section className='about'>
        <motion.div className='about-container' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity:0}}>
          <div className="about-content">
            <div>
              <h1>Hello Again</h1>
              <h2>Here is Some More Info About me</h2>
            </div>
            <ul className='list-info'>
              <li>
                I am a Frontend Developer, and I started my journey in the web development world about one and a half years ago.
              </li>
              <li>
                During this time, I have obtained a lot of experience by watching courses, reading books and building my own projects. 
              </li>
              <li>
                I have also worked as a Freelancer, basically converting UI/UX designs to actual Web pages, and integrated 3rd party APIs into my applications.
              </li>
              <li>
                Besides my frontend skills, I also have some backend skills using node, express, and REST APIs.
              </li>
              <li>
                I certainly think that my best skill is being eager to learn alongwith a big passtion towards my work.
              </li>
              
            </ul>
          </div>

          <div className="degree">
            <h2>My Education</h2>
            <p>I have obtained a Bachelor's Degree in <strong> Networks and Computer Systems Engineering</strong> From Tishreen University</p><span className='location'>Lattakia, Syria</span>
            <div className="about-actions">
              <Link to='/contact' >
                Contact Me
              </Link>
            </div>
          </div>
          
        </motion.div>
    </section>
  )
}

export default About