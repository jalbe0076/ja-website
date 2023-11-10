import './ProjectCard.scss';
import { useRef, useEffect, useState } from 'react';

interface ProjectCardProps {
  img: string,
  alt: string,
  name: string,
  description: string, 
  additionalInfo?: string,
  site: string,
  isDeployed: boolean,
  repo: string,
  isDark: boolean
}

const ProjectCard = ({img, alt, name, description, additionalInfo, site, isDeployed, repo, isDark }: ProjectCardProps)  => {
  const cardRef = useRef<HTMLAnchorElement | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>();

  useEffect(() => {
    if (cardRef.current) {
      const observer = new IntersectionObserver((entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      }, {
        threshold: 0.2
      })
      observer.observe(cardRef.current)
    }
  }, []);

  const arrowSvg = (
    <svg className='arrow' stroke={`${isDark ? '#E6E7E7' : 'rgb(42, 46, 40)'}`} height="24" viewBox="0 0 100 80" width="40">
      <line className="line top" x1="70" x2="40" y1="40" y2="15" strokeWidth="8" strokeLinecap="round"/>
      <line className="line middle" x1="70" x2="10" y1="40" y2="40" strokeWidth="8" strokeLinecap="round" />
      <line className="line bottom" x1="40" x2="70" y1="65" y2="40" strokeWidth="8" strokeLinecap="round"/>
    </svg>
  );

    return (
      <a href={site} ref={cardRef} target="_blank" rel="noopener noreferrer" className={`project-container ${isVisible ? 'animate-fade-in' : ''}`}>
        <img className="project-photo" src={`${process.env.PUBLIC_URL + img}`} alt={alt} />
        <div className="info-box">
          <h3 className="project-name">{name}</h3>
          <p className="project-description">{description}</p>
          {additionalInfo && 
            <>
              <br />
              <p dangerouslySetInnerHTML={{ __html: additionalInfo }} />
            </>
          }
          <div className='navigation-container'>
            {isDeployed && 
              <a className="link-container is-touch" href={site} target="_blank" rel="noopener noreferrer">
                Visit Site
                {arrowSvg}
              </a>
            }
            <a className="link-container" href={repo} target="_blank" rel="noopener noreferrer">
              Visit Repo
              {arrowSvg}
            </a>
          </div>
        </div>
      </a>
    );
  };
  


export default ProjectCard;