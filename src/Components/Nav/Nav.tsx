import './Nav.scss'
import { useEffect, useState } from 'react';

const Nav = () => {
  const [asideState, setAsideState] = useState<string | undefined>(undefined);
  const [hasMounted, setHasMounted] = useState<boolean>(false);

  useEffect(() => {
    !hasMounted && setHasMounted(true);
  }, [hasMounted]);

  const ariaExpanded = asideState === 'opened' ? true : false;

  const handleClick = () => {
    setAsideState(prevState => prevState === 'closed' || prevState === undefined ? 'opened' : 'closed')
  }

  const handleLinkClick = () => {
    setAsideState(prevState => prevState === 'opened'? 'closed' : 'opened')
  }
 
  return (
    <header>
      <div className='name-container'>
        <h1 className='title-name'>JASON ALBERTO&nbsp;</h1>
        <span className='name-tag'>SOFTWARE DEVELOPER</span>
      </div>
      <button className={`menu-btn ${asideState} ${ariaExpanded ? 'shifted' : ''}`} aria-expanded={ariaExpanded} aria-controls='primary-navigation' onClick={handleClick}>
        <svg stroke="var(--button-color)" className="hamburger" viewBox="0 0 100 80" width="30">
          <line className="line top" x1="85" x2="15" y1="20" y2="20" strokeWidth="10" strokeLinecap="round" strokeDasharray="80" strokeDashoffset="0" />
          <line className="line middle" x1="85" x2="15" y1="40" y2="40" strokeWidth="10" strokeLinecap="round" />
          <line className="line bottom" x1="15" x2="85" y1="60" y2="60" strokeWidth="10" strokeLinecap="round" strokeDasharray="80" strokeDashoffset="0" />
        </svg>
        <span className='close-btn'>Close</span>
      </button>
      <aside className='sidebar' aria-hidden={ariaExpanded} id='primary=navigation'>
        <nav className='nav-link-container'>
          <a href='#' className='menu-link about' onClick={handleLinkClick}>About</a>
          <a href='#projects' className='menu-link projects'  onClick={handleLinkClick}>Projects</a>
          <a href='https://drive.google.com/file/d/1nype4yKJtWHic7QLyDYeoa9KfIu2N0vE/view?usp=sharing' className='menu-link resume'  onClick={handleLinkClick} target="_blank">Resume</a>
          <a href='#contact' className='menu-link contact'  onClick={handleLinkClick}>Contact</a>
        </nav>
      </aside>
    </header>
  );
}

export default Nav;