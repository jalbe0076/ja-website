import { useEffect, useRef, useState } from 'react';
import './About.scss';

const About = () => {
  const aboutRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    if(aboutRef.current) {
      const observer = new IntersectionObserver((entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      })
      observer.observe(aboutRef.current);
    }
  }, [])
  

  return (
    <div className="about-container">
      <article ref={aboutRef} className={`${isVisible ? 'animate-fade-in' : ''}`}>
        <h2 className="sub-title-greet">Hi, I'm Jason</h2>
        <p>From architecture to software engineering, I like creating things people can use. My leap into software development was driven by a desire to build beyond the physical realm. From bricks and mortar to lines of code, I find immense satisfaction in transforming concepts into digital reality. As a front-end developer, I draw on my architectural expertise to shape accessible user-centered applications that seamlessly combine style and function.</p>
        <br/>
        <p>When I'm not at the computer you can find me climbing on a rock or taking care of plants.</p>
      </article>
    </div>
  );
}

export default About;