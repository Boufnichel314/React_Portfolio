import MotionHoc from "./MotionHoc";
import logo from "../logo.png";
import '../styles/home.css'
const HomeComponent = () => {
  return <div>
    <h1>Home</h1>
  </div>

};


const Home = MotionHoc(HomeComponent);

export default Home;