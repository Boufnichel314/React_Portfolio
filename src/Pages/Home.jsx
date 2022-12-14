import MotionHoc from "./MotionHoc";
import '../styles/home.css'
import Typewriter from "typewriter-effect";
const HomeComponent = () => {
  return (
    <div className="home_container">
      <div className="image">
      </div>
      <div className="about_image">
      <div className="name">
        <h2 className="h2">Boufnichel Yassine</h2>
        <div className="lign"></div>
        <div className="typewriter">
        <Typewriter
          options={{
            strings: ['Full Stack Developer', 'Photoshop Designer'],
            autoStart: true,
            loop: true,
          }}
        />
        </div>
      </div>
      </div>
    </div>
  );

};


const Home = MotionHoc(HomeComponent);

export default Home;