import './Projects.scss';
import ProjectCard from '../ProjectCard/ProjectCard';

const Projects = () => {
  return (
    <div className='portfolio-box' >
      <div className='anchor' id='projects'/>
      <h2 className="sub-title-section">Projects</h2>
      <section className='portfolio-container'>
        <ProjectCard 
          img='./images/starry-nights.png'
          name='STARRY NIGHTS' 
          description='A website that informs users of upcoming celestial events by fetching data from the NASA API. Users are notified of tracked astroids nearing earth in the next 60 days.' 
          site='https://starry-nights.vercel.app/' 
          repo='https://github.com/jalbe0076/starry-nights'
        />
         <ProjectCard
          img='./images/sound-stash.png' 
          name='SOUND STASH' 
          description='A vinyl collectors website that fetches data from discogs API to diplay that data to users. The web app allows users to login using demo users, search for vinyls, save vinyl albums to a collection, add journal entries for specific albums, and discover new music aligned with the users saved music preferences.' 
          site='https://sound-stash.vercel.app/' 
          repo='https://github.com/jalbe0076/sound-stash'
        />
        <ProjectCard
          img='./images/rancid-tomatillos.png' 
          name='RANCID TOMATILLOS' 
          description='A movie rating website that uses the fetch API to display information about a variety of movies. This web app allows users to search movies by title, filter by ratings, and watch movie trailers.' 
          site='https://jalbe0076.github.io/rancid-tomatillos/' 
          repo='https://github.com/jalbe0076/rancid-tomatillos'
        />
        <ProjectCard
          img='./images/quotebox.png' 
          name='QUOTEBOX' 
          description="Random inspirational quotes are fetched from quotable's API. Your favourite quotes can be saved and deleted."
          site='https://jalbe0076.github.io/quotebox/' 
          repo='https://github.com/jalbe0076/quotebox'
        />      
        <ProjectCard
          img='./images/overlook.png' 
          name='OVERLOOK' 
          description='A hotel dashboard system allowing users to log in, plan their next stay and view past metrics.' 
          additionalInfo="Log in with a username between <span className='highlight-word'>customer01</span> through <span className='highlight-word'>customer50</span> and the password <span className='highlight-word'>overlook2021</span>."
          site='https://jalbe0076.github.io/overlook/' 
          repo='https://github.com/jalbe0076/overlook'
        />
        <ProjectCard
          img='./images/whats-cookin.png' 
          name="WHAT'S COOKIN" 
          description="Data is fetched from a database belonging to Turing's School of Software and Design to simulate a recipe website. Ingredients, instructions and an unrealistic recipe cost is listed."
          site='https://jalbe0076.github.io/whats-cookin/' 
          repo='https://github.com/jalbe0076/whats-cookin'
        />
        <ProjectCard
          img='./images/colorandom.png' 
          name='COLORANDOM' 
          description='A website that generates a random colour palette and allows users to save their favourite palettes.' 
          site='https://jalbe0076.github.io/coloRandom-m1-group/' 
          repo='https://github.com/jalbe0076/coloRandom-m1-group'
        />
        <ProjectCard
          img='./images/rock-paper-scissors.png' 
          name='ROCK PAPER SCISSORS' 
          description='One of my first solo projects after learning some basic JavaScript, HTML5 & CSS3. A simple game of Rock Paper Scissors.' 
          site='https://jalbe0076.github.io/rock-paper-scissors-m1-final/' 
          repo='https://github.com/jalbe0076/rock-paper-scissors-m1-final'
        />
      </section>
    </div>
  );
}

export default Projects;