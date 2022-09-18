import MotionHoc from "./MotionHoc";
import '../styles/about.css'
import { BsGithub } from "react-icons/bs";
import { TiSocialLinkedin } from "react-icons/ti";
import {CgFacebook} from 'react-icons/cg'
const CalenderComponent = () => {
  return (
    <div className="about_container">
      <div className="about_image">
        <div className="about_name">
        <h2>Yassine Boufnichel</h2>
        {/* <h3>Yassine</h3> */}
        </div>
        <div className="about_description">
          <p> Hello dear, <br /> I'm a software engineer student, a web application developer, with expertise in reactJs, Laravel and responsive design.I can incorporate my development and design skills to give your products the outlook that meets your client's needs. <br />  Looking for an expert developer with a diversified skill set, then you are at the right place. <br /> Let's talk here : </p>
        </div>
        <div className="about_icons">
        <div className="icons">
        <a href="https://www.facebook.com/Boufnichel.y" target="_blank" rel="noreferrer">
        <CgFacebook size={40} className="icon" style = {{zIndex: '100', borderRadius: '50%', backgroundColor: '#e5e1da', padding: '4px'}} />
        </a>
        <a href="https://github.com/Boufnichel314" target="_blank" rel="noreferrer">
        <BsGithub size={40} className="icon" style = {{zIndex: '100', borderRadius: '50%', backgroundColor: '#e5e1da', padding: '4px'}} />
        </a>
        <a href="https://www.linkedin.com/in/boufnichel-yassine" target="_blank" rel="noreferrer">
        <TiSocialLinkedin size={40} className="icon" style = {{zIndex: '100', borderRadius: '50%', backgroundColor: '#e5e1da', padding: '4px'}} />
        </a>
        </div>
        </div>
      </div>
      <div className="image">
      <div className="img">
      </div>
      </div>
    </div>
  );
};

const About = MotionHoc(CalenderComponent);

export default About;
