import React from 'react'
import {FaHamburger} from 'react-icons/fa'
import {motion} from 'framer-motion'
import './styles.css'
import { Link } from 'react-router-dom'

const Navbar = ({active, setActive}) => {
    

  return (
    <div
     className='menu'
     
     >
      
        <motion.ul initial={{opacity:0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        >
            <li className='navlist-item'>
                <Link to="/" data-text="Home" onClick={(e)=> setActive(!active)}>Home</Link>
            </li>
            <li className='navlist-item'>
                <Link to="/portfolio" data-text="Portfolio"  onClick={(e)=> setActive(!active)}>Portfolio</Link>
            </li>
            <li className='navlist-item'>
                <Link to='/about' data-text="About"  onClick={(e)=> setActive(!active)}>About</Link>
            </li>
            <li className='navlist-item'>
                <Link to='/skills' data-text="Skills"  onClick={(e)=> setActive(!active)}>Skills</Link>
            </li>
            <li className='navlist-item'>
                <Link to='/contact' data-text="Contact"  onClick={(e)=> setActive(!active)}>Contact</Link>
            </li>
            
        </motion.ul>
    </div>
  )
}

export default Navbar