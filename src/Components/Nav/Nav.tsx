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
        <h1>JASON ALBERTO</h1>
        <p>SOFTWARE DEVELOPER</p>
      </div>
      <button className={`menu-btn ${asideState}`} aria-expanded={ariaExpanded} onClick={handleClick}>
        <svg stroke="var(--button-color)" className="hamburger" viewBox="0 0 100 80" width="30">
          <line className="line top" x1="90" x2="10" y1="20" y2="20" strokeWidth="10" strokeLinecap="round" strokeDasharray="80" strokeDashoffset="0" />
          <line className="line middle" x1="90" x2="10" y1="40" y2="40" strokeWidth="10" strokeLinecap="round" />
          <line className="line bottom" x1="10" x2="90" y1="60" y2="60" strokeWidth="10" strokeLinecap="round" strokeDasharray="80" strokeDashoffset="0" />
        </svg>
        Menu
      </button>
      <aside className='sidebar' aria-expanded={ariaExpanded}>
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