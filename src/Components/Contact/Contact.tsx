import { useEffect, useRef, useState } from 'react';
import './Contact.scss'
import { Link } from 'react-router-dom';

const Contact = () => {
  const contactTitleRef = useRef<HTMLHeadingElement | null>(null);
  const [titleIsVisible, setTitleIsVisible] = useState<boolean>(false);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const [contactIsVisible, setContactIsVisible] = useState<boolean>(false);

  const observe = (setFunction: Function, ref: any) => {
    return new IntersectionObserver((entries) => {
      const [entry] = entries;
      setFunction(entry.isIntersecting)
    })
  }

  useEffect(() => {
    if(contactTitleRef.current) {
      const observer = observe(setTitleIsVisible, contactTitleRef);
      observer.observe(contactTitleRef.current);
    } 
    
    if(contactRef.current) {
      const observer = observe(setContactIsVisible, contactRef);
      observer.observe(contactRef.current);
    }
  }, [])

  return (
    <section className='contact-box'>
      <div className='anchor' id='contact'/>
      <h2 ref={contactTitleRef} className={`sub-title-contact ${titleIsVisible ? 'animate-fade-in' : ''}`}>Let's Chat?</h2>
      <div ref={contactRef} className={`contact-container ${contactIsVisible ? 'animate-fade-in' : ''}`}>
        <h3>You can find me on:</h3>
        <div className='icon-container'>
          <a href='https://www.linkedin.com/in/jason-alberto/' target='blank' className='contact-link linkedin'>
            <svg height="60px" viewBox="-143 145 512 512">
              <path d="M-143,145v512h512V145H-143z M41.4,508.1H-8.5V348.4h49.9V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7  c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6  c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1  c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z"/>
              <path d="M-143,145v512h512V145H-143z M41.4,508.1H-8.5V348.4h49.9V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7  c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6  c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1  c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z"/>
            </svg>
          </a>
          <a href='https://github.com/jalbe0076' target='blank' className='contact-link github'>
            <svg  height="60px" viewBox="0 0 20 20">    
              <g transform="translate(-140.000000, -7559.000000)">
                <g transform="translate(56.000000, 160.000000)">
                  <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"/>
                </g>
              </g>
            </svg>
          </a>
          <Link to='/contact-me' className='contact-link mail'>
            <svg  height="60px" viewBox="0 0 512 512">
              <path d="M0,64v384h512V64H0z M264.132,266.765c-1.996,1.688-4.95,2.657-8.1,2.657c-3.153,0-6.098-0.964-8.083-2.642   L48,112h416L264.132,266.765z M95.11,194.306l69.518,58.954L48,368V160L95.11,194.306z M199.288,282.652l16.35,13.866   c10.836,9.215,25.169,14.288,40.361,14.288c15.236,0,29.588-5.071,40.418-14.282l16.321-13.846L432,400H80L199.288,282.652z    M347.394,253.282L464,160v208L347.394,253.282z"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Contact;