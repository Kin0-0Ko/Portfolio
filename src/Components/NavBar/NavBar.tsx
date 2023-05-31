import React, { FC } from 'react';
import styles from './NavBar.module.sass';
import { NavLink } from 'react-router-dom';

interface NavBarProps {}

const NavBar: FC<NavBarProps> = () => (
  <div className={styles.NavBar} data-testid="NavBar">
     <nav>
          <ul>
            <li>
              <NavLink className={({isActive, isPending})=> 
				isPending ? styles.pendingLink : isActive ? styles.activeLink : styles.Link}
			 to={`/`}>Home</NavLink>
            </li>
            <li>
              <NavLink className={({isActive, isPending})=> 
				isPending ? styles.pendingLink : isActive ? styles.activeLink : styles.Link}
			 to={`Skills`}>Skills</NavLink>
            </li>
			<li>
              <NavLink className={({isActive, isPending})=> 
				isPending ? styles.pendingLink : isActive ? styles.activeLink : styles.Link}
			 to={`Portfolio`}>Portfolio</NavLink>
            </li>
			<li>
              <NavLink className={({isActive, isPending})=> 
				isPending ? styles.pendingLink : isActive ? styles.activeLink : styles.Link}
			 to={`contacts`}>Contacts</NavLink>
            </li>
          </ul>
        </nav>
  </div>
);

export default NavBar;
