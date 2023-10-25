import './Projects.scss';
import ProjectCard from '../ProjectCard/ProjectCard';
import { useEffect, useRef, useState } from 'react';

interface ProjectsProps {
  isDark: boolean
}

const Projects = ({isDark}: ProjectsProps) => {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>();

  useEffect(() => {
    if (titleRef.current) {
      const observer = new IntersectionObserver((entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting)
      }, {
        threshold: 1
      })
      observer.observe(titleRef.current)
    }
  }, []);

  return (
    <div className={`portfolio-box `} >
      <div className='anchor' id='projects'/>
      <h2 ref={titleRef} className={`sub-title-project ${isVisible ? 'animate-fade-in' : ''}`}>Projects</h2>
      <section className='portfolio-container'>
        <ProjectCard 
          img='./images/klime.png'
          name='KLIME' 
          description='An iOS only React Native application targeting users with home built climbing walls. Users can save different problems on the same wall.' 
          site='https://github.com/Climber-s-App/klime_fe'
          isDeployed={false}  
          repo='https://github.com/Climber-s-App/klime_fe'
          isDark={isDark}
        />
        <ProjectCard 
          img='./images/starry-nights.png'
          name='STARRY NIGHTS' 
          description='A website that informs users of upcoming celestial events by fetching data from the NASA API. Users are notified of tracked astroids nearing earth in the next 60 days.' 
          site='https://starry-nights.vercel.app/' 
          isDeployed={true}
          repo='https://github.com/jalbe0076/starry-nights'
          isDark={isDark}
        />
        <ProjectCard
          img='./images/sound-stash.png' 
          name='SOUND STASH' 
          description='A vinyl collectors website that fetches data from discogs API to diplay that data to users. The web app allows users to login using demo users, search for vinyls, save vinyl albums to a collection, add journal entries for specific albums, and discover new music aligned with the users saved music preferences.' 
          site='https://sound-stash-mu.vercel.app/' 
          isDeployed={true}
          repo='https://github.com/jalbe0076/sound-stash'
          isDark={isDark}
        />
        <ProjectCard
          img='./images/rancid-tomatillos.png' 
          name='RANCID TOMATILLOS' 
          description='A movie rating website that uses the fetch API to display information about a variety of movies. This web app allows users to search movies by title, filter by ratings, and watch movie trailers.' 
          site='https://jalbe0076.github.io/rancid-tomatillos/' 
          isDeployed={true}
          repo='https://github.com/jalbe0076/rancid-tomatillos'
          isDark={isDark}
        />
        <ProjectCard
          img='./images/quotebox.png' 
          name='QUOTEBOX' 
          description="Random inspirational quotes are fetched from quotable's API. Your favourite quotes can be saved and deleted."
          site='https://jalbe0076.github.io/quotebox/' 
          isDeployed={true}
          repo='https://github.com/jalbe0076/quotebox'
          isDark={isDark}
        />      
        <ProjectCard
          img='./images/overlook.png' 
          name='OVERLOOK' 
          description='A hotel dashboard system allowing users to log in, plan their next stay and view past metrics.' 
          additionalInfo="Log in with a username between <span className='highlight-word'>customer01</span> through <span className='highlight-word'>customer50</span> and the password <span className='highlight-word'>overlook2021</span>."
          site='https://jalbe0076.github.io/overlook/' 
          isDeployed={true}
          repo='https://github.com/jalbe0076/overlook'
          isDark={isDark}
        />
        <ProjectCard
          img='./images/whats-cookin.png' 
          name="WHAT'S COOKIN" 
          description="Data is fetched from a database belonging to Turing's School of Software and Design to simulate a recipe website. Ingredients, instructions and an unrealistic recipe cost is listed."
          site='https://jalbe0076.github.io/whats-cookin/' 
          isDeployed={true}
          repo='https://github.com/jalbe0076/whats-cookin'
          isDark={isDark}
        />
        <ProjectCard
          img='./images/colorandom.png' 
          name='COLORANDOM' 
          description='A website that generates a random colour palette and allows users to save their favourite palettes.' 
          site='https://jalbe0076.github.io/coloRandom-m1-group/' 
          isDeployed={true}
          repo='https://github.com/jalbe0076/coloRandom-m1-group'
          isDark={isDark}
        />
        <ProjectCard
          img='./images/rock-paper-scissors.png' 
          name='ROCK PAPER SCISSORS' 
          description='One of my first solo projects after learning some basic JavaScript, HTML5 & CSS3. A simple game of Rock Paper Scissors.' 
          site='https://jalbe0076.github.io/rock-paper-scissors-m1-final/' 
          isDeployed={true}
          repo='https://github.com/jalbe0076/rock-paper-scissors-m1-final'
          isDark={isDark}
        />
      </section>
    </div>
  );
}

export default Projects;