import MotionHoc from "./MotionHoc";
import '../styles/about.css'

const CalenderComponent = () => {
  return (
    <div className="about_container">
      <div className="about_image">

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
