import './Nav.scss'
import { useEffect, useState } from 'react';

const Nav = () => {
  const [asideState, setAsideState] = useState<string | undefined>(undefined);
  const [hasMounted, setHasMounted] = useState<boolean>(false);

  useEffect(() => {
    !hasMounted && setHasMounted(true);
  }, [hasMounted]);

  const ariaExpanded = asideState === 'closed' ? true : false;

  const handleClick = () => {
    setAsideState(prevState => prevState === 'closed' || prevState === undefined ? 'opened' : 'closed')
  }
 
  return (
    <header>
      <h1>Jason Alberto</h1>
      <button 
        className={`menu-btn ${asideState}`}
        aria-expanded={ariaExpanded}
        onClick={handleClick}>
        <svg stroke="var(--button-color)" className="hamburger" viewBox="0 0 100 80" width="35">
          <line className="line top" x1="90" x2="10" y1="20" y2="20" strokeWidth="10" strokeLinecap="round" strokeDasharray="80" strokeDashoffset="0" />
          <line className="line middle" x1="90" x2="10" y1="40" y2="40" strokeWidth="10" strokeLinecap="round" strokeDasharray="80" strokeDashoffset="0" />
          <line className="line bottom" x1="10" x2="90" y1="60" y2="60" strokeWidth="10" strokeLinecap="round" strokeDasharray="80" strokeDashoffset="0" />
        </svg>
        Menu
      </button>
    </header>
  );
}

export default Nav;