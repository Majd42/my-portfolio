import React from 'react'
import './styles.css'
import {Link} from 'react-router-dom'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section className='about'>
        <motion.div className='about-container' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity:0}}>
          <h1>ERROR 404</h1>
          <p>page not found, Will be uploaded Soon ..</p>
          <div className="about-links">
            <Link to='/portfolio'>Back</Link>
            <Link to='/experience'>Forward</Link>
          </div>
        </motion.div>
    </section>
  )
}

export default About