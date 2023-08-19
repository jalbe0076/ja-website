import './ProjectCard.scss'

interface ProjectCardProps {
  img: string,
  name: string,
  description: string, 
  additionalInfo?: string,
  site: string,
  repo: string
}

const ProjectCard = ({img, name, description, additionalInfo, site, repo }: ProjectCardProps) => {
  const arrowSvg = (
    <svg className='arrow' stroke="black" height="24" viewBox="0 0 100 80" width="40">
          <line className="line top" x1="70" x2="40" y1="40" y2="20" strokeWidth="8" strokeLinecap="round"/>
          <line className="line middle" x1="70" x2="0" y1="40" y2="40" strokeWidth="8" strokeLinecap="round" />
          <line className="line bottom" x1="40" x2="70" y1="60" y2="40" strokeWidth="8" strokeLinecap="round"/>
    </svg>
  );

  return (
    <article className='project-container'>
      <img className="project-photo" src={`${process.env.PUBLIC_URL + img}`} />
      <div className="info-box">
        <h3 className="project-name">{name}</h3>
        <p className="project-description">{description}</p>
        {additionalInfo && (
          <>
            <br/>
            <p dangerouslySetInnerHTML={{ __html: additionalInfo }}/>
          </>
        )}
        <div className='navigation-container'>
          <a className="link-container" href={site} target="_blank">
            Visit Site
            {arrowSvg}
          </a>
          <a className="link-container" href={repo} target="_blank">
            Visit Repo
            {arrowSvg}  
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;