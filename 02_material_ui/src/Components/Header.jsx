import React from 'react'
import { NavLink } from 'react-router-dom'


function Header() {
  return (
    <div>
        <nav>
            <li>
                <NavLink
                to='/'
                >
                    Home
                </NavLink>
            </li>

            <li>
                <NavLink
                to='/form'
                >
                    Form
                </NavLink>
            </li>

            <li>
                <NavLink
                to='/contact'
                >
                    Contact
                </NavLink>
            </li>

            <li>
                <NavLink
                to='/containers'
                >
                Containers
                    
                </NavLink>
            </li>

            <li>
          <NavLink 
          to="/containers2"
          >
            Containers2
          </NavLink>
            </li>

           

          
        </nav>
    </div>
  )
}

export default Header