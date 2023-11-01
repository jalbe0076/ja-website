import './Nav.scss';

import { useEffect, useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { NavLink, Link, useNavigate } from 'react-router-dom';

interface NavProps {
  isDark: boolean, 
  setIsDark: (isDark: boolean) => void
};

const Nav = ({isDark, setIsDark}: NavProps) => {
  const [asideState, setAsideState] = useState<string | undefined>(undefined);
  const [hasMounted, setHasMounted] = useState<boolean>(false);
  const navigate = useNavigate();

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
        <DarkModeSwitch
              className='theme-mode'
              checked={isDark}
              onChange={toggleDarkMode}
              size={35}
              sunColor={'#dffc79'}
          />
        <button role='menu' className={`menu-btn ${asideState} ${ariaExpanded ? 'shifted' : ''}`} aria-expanded={ariaExpanded} aria-controls='primary-navigation' onClick={handleClick}>
          <svg stroke="var(--button-color)" className="hamburger" viewBox="0 0 100 80" width="30">
            <line className="line top" x1="85" x2="15" y1="20" y2="20" strokeWidth="10" strokeLinecap="round" strokeDasharray="80" strokeDashoffset="0" />
            <line className="line middle" x1="85" x2="15" y1="40" y2="40" strokeWidth="10" strokeLinecap="round" />
            <line className="line bottom" x1="15" x2="85" y1="60" y2="60" strokeWidth="10" strokeLinecap="round" strokeDasharray="80" strokeDashoffset="0" />
          </svg>
        </button>
      </div>
      <aside className='sidebar' aria-expanded={ariaExpanded} id='primary=navigation'>
        <nav className='nav-link-container'>
          <Link to='/#about' className='menu-link about' onClick={handleLinkClick}>About</Link>
          <Link to='/#projects' className='menu-link projects'  onClick={handleLinkClick}>Projects</Link>
          <Link to='https://drive.google.com/file/d/1nype4yKJtWHic7QLyDYeoa9KfIu2N0vE/view?usp=sharing' className='menu-link resume'  onClick={handleLinkClick} target="_blank">Resume</Link>
          <Link to='/#contact' className='menu-link contact'  onClick={handleLinkClick}>Contact</Link>
        </nav>
      </aside>
    </header>
  );
}

export default Nav;