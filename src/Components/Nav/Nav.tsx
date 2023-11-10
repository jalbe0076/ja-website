import './Nav.scss';
import { useEffect, useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { NavLink, Link } from 'react-router-dom';

interface NavProps {
  isDark: boolean, 
  setIsDark: (isDark: boolean) => void
};

const Nav = ({isDark, setIsDark}: NavProps) => {
  const [asideState, setAsideState] = useState<string | undefined>(undefined);
  const [hasMounted, setHasMounted] = useState<boolean>(false);

  useEffect(() => {
    !hasMounted && setHasMounted(true);
  }, [hasMounted]);

  const ariaExpanded = asideState === 'opened' ? true : false;

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  }

  const handleClick = () => {
    setAsideState(prevState => prevState === 'closed' || prevState === undefined ? 'opened' : 'closed')
  }

  const handleLinkClick = () => {
    setAsideState(prevState => prevState === 'opened'? 'closed' : 'opened')
  }
 
  return (
    <header>
      <NavLink to='/' className='name-container'>
        <h1 className='title-name'>Jason Alberto&nbsp;</h1>
        <span className='name-tag'>Software Developer</span>
      </NavLink>
      <div className='option-container'>  
        <button className='menu-btn' aria-labelledby='theme-mode' onClick={toggleDarkMode}>
        <DarkModeSwitch
              className='theme-mode'
              checked={isDark}
              onChange={toggleDarkMode}
              size={35}
              sunColor={'#dffc79'}
          />
          <span id='theme-mode' hidden>toggle theme to {isDark ? 'light mode' : 'dark mode'}</span>
        </button>
        <button className={`menu-btn ${asideState} `} aria-labelledby='sidebar-menu' aria-expanded={ariaExpanded} aria-controls='primary-navigation' onClick={handleClick}>
          <svg stroke="var(--button-color)" className="hamburger" viewBox="0 0 100 80" width="30">
            <line className="line top" x1="85" x2="15" y1="20" y2="20" strokeWidth="10" strokeLinecap="round" strokeDasharray="80" strokeDashoffset="0" />
            <line className="line middle" x1="85" x2="15" y1="40" y2="40" strokeWidth="10" strokeLinecap="round" />
            <line className="line bottom" x1="15" x2="85" y1="60" y2="60" strokeWidth="10" strokeLinecap="round" strokeDasharray="80" strokeDashoffset="0" />
          </svg>
        <span id='sidebar-menu' hidden>open or close</span>
        </button>
      </div>
      <aside role='menu' className='sidebar' aria-expanded={ariaExpanded} id='primary-navigation'>
        <nav className='nav-link-container'>
          <Link id='about' to='/#about' role='menuitem' className='menu-link about' onClick={handleLinkClick}>About</Link>
          <Link id='projects' to='/#projects' role='menuitem' className='menu-link projects'  onClick={handleLinkClick}>Projects</Link>
          <Link id='resume' to='https://drive.google.com/file/d/1nype4yKJtWHic7QLyDYeoa9KfIu2N0vE/view?usp=sharing' role='menuitem' className='menu-link resume'  onClick={handleLinkClick} target="_blank">Resume</Link>
          <Link id='contact' to='/#contact' role='menuitem' className='menu-link contact'  onClick={handleLinkClick}>Contact</Link>
        </nav>
      </aside>
    </header>
  );
}

export default Nav;