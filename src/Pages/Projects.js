import MotionHoc from "./MotionHoc";
import '../styles/home.css'
import '../styles/projects.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import ".../swiper.css";
import { EffectFlip, Pagination, Navigation } from "swiper";
const ProjectsComponent = () => {
  return (
    <div className="projects_container">
      <div className="titre">
        <h2 className="h2">Welcome to my projects page</h2>
      </div>
      <div className="my_swippper">
      <Swiper style={{width : '100%', height : '100%'}}
        speed={1500}
        effect={"flip"}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="project_description">
          
        </div>
        <div className="project_image">
          <div className="img">
          
         </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="project_description">
        
        </div>
        <div className="project_image">
        <div className="im2">

          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="project_description">
          
        </div>
        <div className="project_image">

        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="project_description">
          
        </div>
        <div className="project_image">

        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="project_description">
          
        </div>
        <div className="project_image">

        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="project_description">
          
        </div>
        <div className="project_image">

        </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  );
};

const Projects = MotionHoc(ProjectsComponent);

export default Projects;
