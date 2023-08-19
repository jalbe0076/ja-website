import { env } from 'process';
import './Projects.scss';

const Projects = () => {
  return (
    <section className='portfolio-container'>
      <article className='project-container'>
        <img className="project-photo" src={process.env.PUBLIC_URL + './images/starry-nights.png'} />
        <div className="info-box">
          <h3 className="project-name">STARRY NIGHTS</h3>
          <p className="project-description">A website that informs users of upcoming celestial events by fetching data from the NASA API. Users are notified of tracked astroids nearing earth in the next 60 days.</p>
          <div className='navigation-container'>
            <div className="link-container">
              <a href="https://starry-nights.vercel.app/" className="site-link" target="_blank">Visit Site</a>
            </div>
            <div className="link-container">
              <a href="https://github.com/jalbe0076/starry-nights" className="repo-link" target="_blank">Visit Repo</a>
            </div>
          </div>
        </div>
      </article>
      <article className='project-container'>
        <img className="project-photo" src={process.env.PUBLIC_URL + './images/sound-stash.png'} />
        <div className="info-box">
          <h3 className="project-name">SOUND STASH</h3>
          <p className="project-description">A vinyl collectors website that fetches data from discogs API to diplay that data to users. The web app allows users to login using demo users, search for vinyls, save vinyl albums to a collection, add journal entries for specific albums, and discover new music aligned with the users saved music preferences.</p>
          <div className='navigation-container'>
            <div className="link-container">
              <a href="https://sound-stash.vercel.app/" className="site-link" target="_blank">Visit Site</a>
            </div>
            <div className="link-container">
              <a href="https://github.com/jalbe0076/sound-stash" className="repo-link" target="_blank">Visit Repo</a>
            </div>
          </div>
        </div>
      </article>
      <article className='project-container'>
        <img className="project-photo" src={process.env.PUBLIC_URL + './images/rancid-tomatillos.png'} />
        <div className="info-box">
          <h3 className="project-name">RANCID TOMATILLOS</h3>
          <p className="project-description">A movie rating website that uses the fetch API to display information about a variety of movies. This web app allows users to search movies by title, filter by ratings, and watch movie trailers.</p>
          <div className='navigation-container'>
            <div className="link-container">
              <a href="https://jalbe0076.github.io/rancid-tomatillos/" className="site-link" target="_blank">Visit Site</a>
            </div>
            <div className="link-container">
              <a href="https://github.com/jalbe0076/rancid-tomatillos" className="repo-link" target="_blank">Visit Repo</a>
            </div>
          </div>
        </div>
      </article>
      <article className='project-container'>
        <img className="project-photo" src={process.env.PUBLIC_URL + './images/quotebox.png'} />
        <div className="info-box">
          <h3 className="project-name">QUOTEBOX</h3>
          <p className="project-description">Random inspirational quotes are fetched from quotable's API. Your favourite quotes can be saved and deleted.</p>
          <div className='navigation-container'>
            <div className="link-container">
              <a href="https://jalbe0076.github.io/quotebox/" className="site-link" target="_blank">Visit Site</a>
            </div>
            <div className="link-container">
              <a href="https://github.com/jalbe0076/quotebox" className="repo-link" target="_blank">Visit Repo</a>
            </div>
          </div>
        </div>
      </article>
      <article className='project-container'>
        <img className="project-photo" src={process.env.PUBLIC_URL + './images/overlook.png'} />
        <div className="info-box">
          <h3 className="project-name">OVERLOOK</h3>
          <p className="project-description">A hotel dashboard system allowing users to log in, plan their next stay and view past metrics.</p>
          <br/>
          <p>Log in with a username between <span className='highlight-word'>customer01</span> through <span className='highlight-word'>customer50</span> and the password <span className='highlight-word'>overlook2021</span>.</p>
          <div className='navigation-container'>
            <div className="link-container">
              <a href="https://jalbe0076.github.io/overlook/" className="site-link" target="_blank">Visit Site</a>
            </div>
            <div className="link-container">
              <a href="https://github.com/jalbe0076/overlook" className="repo-link" target="_blank">Visit Repo</a>
            </div>
          </div>
        </div>
      </article>
      <article className='project-container'>
        <img className="project-photo" src={process.env.PUBLIC_URL + './images/whats-cookin.png'} />
        <div className="info-box">
          <h3 className="project-name">WHAT'S COOKIN</h3>
          <p className="project-description">Data is fetched from a database belonging to Turing's School of Software and Design to simulate a recipe website. Ingredients, instructions and an unrealistic recipe cost is listed. </p>
          <div className='navigation-container'>
            <div className="link-container">
              <a href="https://jalbe0076.github.io/whats-cookin/" className="site-link" target="_blank">Visit Site</a>
            </div>
            <div className="link-container">
              <a href="https://github.com/jalbe0076/whats-cookin" className="repo-link" target="_blank">Visit Repo</a>
            </div>
          </div>
        </div>
      </article>
      <article className='project-container'>
        <img className="project-photo" src={process.env.PUBLIC_URL + './images/colorandom.png'} />
        <div className="info-box">
          <h3 className="project-name">COLORANDOM</h3>
          <p className="project-description">A website that generates a random colour palette and allows users to save their favourite palettes.</p>
          <div className='navigation-container'>
            <div className="link-container">
              <a href="https://jalbe0076.github.io/coloRandom-m1-group/" className="site-link" target="_blank">Visit Site</a>
            </div>
            <div className="link-container">
              <a href="https://github.com/jalbe0076/coloRandom-m1-group" className="repo-link" target="_blank">Visit Repo</a>
            </div>
          </div>
        </div>
      </article>
      <article className='project-container'>
        <img className="project-photo" src={process.env.PUBLIC_URL + './images/rock-paper-scissors.png'} />
        <div className="info-box">
          <h3 className="project-name">ROCK PAPER SCISSORS</h3>
          <p className="project-description">One of my first solo projects after learning some basic JavaScript, HTML5 & CSS3. A simple game of Rock Paper Scissors. </p>
          <div className='navigation-container'>
            <div className="link-container">
              <a href="https://jalbe0076.github.io/rock-paper-scissors-m1-final/" className="site-link" target="_blank">Visit Site</a>
            </div>
            <div className="link-container">
              <a href="https://github.com/jalbe0076/rock-paper-scissors-m1-final" className="repo-link" target="_blank">Visit Repo</a>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Projects;