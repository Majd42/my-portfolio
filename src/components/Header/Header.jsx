import React, { useState } from 'react'
import { useEffect } from 'react' 
import {Link, useLocation} from 'react-router-dom'
import './styles.css'
const Header = ({active, setActive}) => {

  const location1 = useLocation()
  const pathname = location1.pathname
  const [path, setPath] = useState('')
  const primaryPages = ['/', '/about', '/experience']

  useEffect(() => {
    setPath(pathname)
  
  
  }, [pathname])
  
  
  return (
    <nav className={primaryPages.includes(path) ?'secondary' : 'primary'}>
        <ul>
            <li className='first'>Frontend Developer</li>
            <li className='my-name'>Majd Shaheen <span>{pathname}</span></li>
        </ul>

        <Link to={active ? '/' : '/menu'}>
          <div  className={active ?'active burger-div' : 'burger-div'} onClick={(e)=>{setActive(!active) }}>
              <span className='burger-span'></span>
          </div>
        </Link>
    </nav>
  )
}

export default Header