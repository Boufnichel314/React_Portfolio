import { Route, Routes, useLocation } from "react-router";
import Sidebar from "./Sidebar";
import Home from "./Pages/Home";
import Contact from "./Pages/Team";
import About from "./Pages/About";
import Studies from "./Pages/Studies";
import Projects from "./Pages/Projects";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
const Pages = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: calc(2rem + 2vw);
    background: linear-gradient(to right, #803bec 30%, #1b1b1b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

function App() {
  const location = useLocation();
  return (
    <>
      <Sidebar />
      <Pages>
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route exact path="React_Portfolio/" element={<Home />} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/studies" element={<Studies/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </AnimatePresence>
      </Pages>
    </>
  );
}

export default App;
