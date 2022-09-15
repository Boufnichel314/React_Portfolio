import MotionHoc from "./MotionHoc";
import '../styles/about.css'

const CalenderComponent = () => {
  return (
    <div className="about_container">
      <div className="about_image">
        <div className="about_name">
        <h2>Boufnichel</h2>
        {/* <h3>Yassine</h3> */}
        </div>
        <div className="about_description">
          <p> Hello dear, <br /> I'm a software enineer student, a web application developer, with expertise in reactJs, Laravel and responsive design, so i will definitely help you for whatever you want. <br /> Don't hesitate, and contatct me. </p>
        </div>
        <div className="about_icons">

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
