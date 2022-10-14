import React from 'react'
import './styles.css'
import {BiRightArrowAlt} from 'react-icons/bi'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import CV from '../../assets/CV.pdf'
const Home = () => {


    

  return (
    <section className='home'>
     <motion.div 
     className="home-container"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0, size: 0}}
      
     >
      <div className="content-container">
        <h1 className='first-h'> Hello, </h1>
        <h1 className='second-h'>My name is Majd &I'm a</h1>
        <h1 className='third-h'> Frontend Developer</h1>
        <div className="contact-btns">
          <a href={CV} download>Resume</a>
          <Link to='/contact'>Let's Talk</Link>
        </div>
      </div>
      <div className="next">
        <Link to='portfolio'><BiRightArrowAlt/></Link>
      </div>
     </motion.div>
    </section>
    
  )
}

export default Home