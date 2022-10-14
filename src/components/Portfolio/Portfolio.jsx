import React from 'react'
import IMG1 from '../../assets/ecommerce.png'
import {motion} from 'framer-motion'
import './styles.css'

const Portfolio = ({projects}) => {
  return (
    <section className='portfolio'>
        <motion.div className="projects"
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        >
            
             {projects.map((project) =>(
              <div className={project.id== 1 ? 'project odd' : 'project'}>
                <div className="thumbnail">
                <img src={project.img} alt="" /> 
              </div>
              <div className="information">
                <h1>{project.title}</h1>
                <p>{project.discription} </p>
                <div className="actions">
                  <a href={project.url}>View Live</a>
                  <a href={project.git}>Github</a>
                </div>
              </div>
              </div>
            ))} 
        </motion.div>
    </section>
  )
}

export default Portfolio