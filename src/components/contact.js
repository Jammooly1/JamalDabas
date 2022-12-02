import React from 'react';
import MailIcon from '../assets/mail.svg';
import MobileIcon from '../assets/mobile.svg';
import GlobeIcon from '../assets/globe.svg';
import LocationIcon from '../assets/location.svg';
import GithubIcon from '../assets/github.svg';
import LinkedInIcon from '../assets/linkedin.svg';

const Contact = ({ field, value }) => (
  <span className="flex my-2 text-primary-900 tracking-widest items-center">
    {field === 'email' && (
      <>
        <MailIcon className="contact-icon" />
        <a className="contact-link" href={`mailto:${value}`} title="email">
          {value}
        </a>
      </>
    )}
    
    {field === 'phone' && (
      <>
        <MobileIcon className="contact-icon" />
        <a className="contact-link" href={`tel:${value}`} title="phone">
          {value}
        </a>
      </>
    )} 
    
    {field === 'website' && (
      <>
        <GlobeIcon className="contact-icon" />
        <a
          className="contact-link"
          target="_blank"
          href={value}
          rel="noopener noreferrer"
          title="website"
        >
          Personal Site
        </a>
      </>
    )}
    {field === 'location' && (
      <>
        <LocationIcon className="contact-icon" />
        <span className="contact-link">{value}</span>
      </>
    )}
    {field === 'github' && (
      <>
        <GithubIcon className="contact-icon" />
        <a className="contact-link" href="https://github.com/Jammooly1" target="_blank" title="github">
          {value}
        </a>
      </>
    )}
    {field === 'linkedIn' && (
      <>
        <LinkedInIcon className="contact-icon" />
        <a className="contact-link" href="https://www.linkedin.com/in/jdabas/" target="_blank" title="linkedIn">
          {value}
        </a>
      </>
    )}
  </span>
);

export default Contact;
