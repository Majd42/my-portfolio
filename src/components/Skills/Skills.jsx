import React from 'react'
import './styles.css'
import {motion} from 'framer-motion'

const Skills = () => {
  return (
    <section className='skills-container'>
      <motion.div className="skills-content"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      >
        <h1 className='skills-title'>My Skills</h1>
        <div className="skills">
          <div className="skill">
            <h1>HTML</h1>
            <div className="progress-bar " >
              <div className="progress-percent html">
                <div className="progress-percent-number">
                  95%
                </div>
              </div>
            </div>
          </div>
          <div className="skill">
            <h1>CSS</h1>
            <div className="progress-bar">
              <div className="progress-percent css">
                <div className="progress-percent-number">
                  90%
                </div>
              </div>
            </div>
          </div>
          <div className="skill">
            <h1>Javascirpt</h1>
            <div className="progress-bar">
              <div className="progress-percent javascirpt">
                <div className="progress-percent-number">
                  85%
                </div>
              </div>
            </div>
          </div>
          <div className="skill">
            <h1>React.js</h1>
            <div className="progress-bar">
              <div className="progress-percent react">
                <div className="progress-percent-number">
                  80%
                </div>
              </div>
            </div>
          </div>
          <div className="skill">
            <h1>MUI</h1>
            <div className="progress-bar">
              <div className="progress-percent material">
                <div className="progress-percent-number">
                  80%
                </div>
              </div>
            </div>
          </div>
          <div className="skill">
            <h1>SCSS</h1>
            <div className="progress-bar">
              <div className="progress-percent scss">
                <div className="progress-percent-number">
                  90%
                </div>
              </div>
            </div>
          </div>
          <div className="skill">
            <h1>Git</h1>
            <div className="progress-bar">
              <div className="progress-percent git">
                <div className="progress-percent-number">
                  75%
                </div>
              </div>
            </div>
          </div>
          <div className="skill">
            <h1>node.js</h1>
            <div className="progress-bar">
              <div className="progress-percent node">
                <div className="progress-percent-number">
                  65%
                </div>
              </div>
            </div>
          </div>
          <div className="skill">
            <h1>Express.js</h1>
            <div className="progress-bar">
              <div className="progress-percent express">
                <div className="progress-percent-number">
                  60%
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </motion.div>
    </section>
  )
}

export default Skills