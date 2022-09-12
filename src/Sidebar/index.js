import React, { useState } from "react";
import {ImHome} from 'react-icons/im'
import {IoInformationCircle, IoSchoolSharp} from 'react-icons/io5'
import {AiFillAppstore} from "react-icons/ai";
import {ImEnvelop} from 'react-icons/im';
//All the svg files
import logo from "../logo.svg";
// import Home from "../logo.svg";
import Projects from "../logo.svg";
import Contact from "../logo.svg";
import Calender from "../logo.svg";
import Documents from "../logo.svg";
import PowerOff from "../logo.svg";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  position: fixed;
  right: 0;
  .active {
    border-left: 4px solid var(--white);

    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }
`;

const Button = styled.button`
  background-color: var(--black);
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin: 0.5rem 0 0 0.5rem;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  &::before,
  &::after {
    content: "";
    background-color: var(--white);
    height: 2px;
    width: 1rem;
    position: absolute;
    transition: all 0.3s ease;
  }

  &::before {
    top: ${(props) => (props.clicked ? "1.5" : "1rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }

  &::after {
    top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

const SidebarContainer = styled.div`
  background-color: var(--black);
  width: 3.5rem;
  height: 80vh;
  margin-top: 1rem;
  border-radius: 30px 0 0 30px;
  padding: 1rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  position: relative;
`;

const Logo = styled.div`
  width: 2rem;

  img {
    width: 100%;
    height: auto;
  }
`;

const SlickBar = styled.ul`
  color: var(--white);
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--black);

  padding: 2rem 0;

  position: absolute;
  top: 6rem;
  right: 0;

  width: ${(props) => (props.clicked ? "12rem" : "3.5rem")};
  transition: all 0.5s ease;
  border-radius: 30px 0 0 30px;
`;

const Item = styled(NavLink)`
  text-decoration: none;
  color: var(--white);
  width: 100%;
  padding: 1rem 0;
  cursor: pointer;

  display: flex;
  padding-left: 1rem;

  &:hover {
    border-right: 4px solid var(--white);

    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }

  img {
    width: 1.2rem;
    height: auto;
    filter: invert(92%) sepia(4%) saturate(1033%) hue-rotate(169deg)
      brightness(78%) contrast(85%);
  }
`;

const Text = styled.span`
  width: ${(props) => (props.clicked ? "100%" : "0")};
  overflow: hidden;
  margin-right: ${(props) => (props.clicked ? "1.5rem" : "0")};
  transition: all 0.5s ease;
`;

const Profile = styled.div`
  width: ${(props) => (props.clicked ? "16rem" : "3rem")};
  height: 3rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: ${(props) => (props.clicked ? "9rem" : "-10rem")};
  background-color: var(--black);
  color: var(--white);
  transition: all 0.3s ease;

  img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    cursor: pointer;
    position: fixed;
    right: 4px;
    &:hover {
      border: 2px solid var(--grey);
      padding: 2px;
    }
  }
`;

const Name = styled.div`
  padding-right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    display: flex;
    span{
      margin-right: 0.4rem;
    }
  }

  a {
    font-size: 0.8rem;
    text-decoration: none;
    color: var(--grey);

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Sidebar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [profileClick, setprofileClick] = useState(false);
  const handleProfileClick = () => setprofileClick(!profileClick);

  return (
    <Container>
      <Button clicked={click} onClick={() => handleClick()}>
        Click
      </Button>
      <SidebarContainer>
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
        <SlickBar clicked={click}>
          <Item
            onClick={() => setClick(false)}
            exact
            activeClassName="active"
            to="/"
          >
          <Text clicked={click}>Home</Text>
            <ImHome style={{fontSize: '26px'}} />
            
          </Item>
          <Item
            onClick={() => setClick(false)}
            activeClassName="active"
            to="/projects"
          >
          <Text clicked={click}>Projects</Text>
            <AiFillAppstore style={{fontSize: '26px'}} />
            
          </Item>
          <Item
            onClick={() => setClick(false)}
            activeClassName="active"
            to="/about"
          >
          <Text clicked={click}>About</Text>
            <IoInformationCircle style={{fontSize: '26px'}} />
            
          </Item>
          <Item
            onClick={() => setClick(false)}
            activeClassName="active"
            to="/studies"
          >
          <Text clicked={click}>Studies</Text>
            <IoSchoolSharp style={{fontSize: '26px'}} />
            
          </Item>
          <Item
            onClick={() => setClick(false)}
            activeClassName="active"
            to="/contact"
          >
          <Text clicked={click}>Contact</Text>
            <ImEnvelop style={{fontSize: '26px'}} />
            
          </Item>
        </SlickBar>

        <Profile clicked={profileClick}>
            <Name>
              <h4><span>Boufnichel</span><span>Yassine</span></h4>
              <a href="https://www.linkedin.com/in/boufnichel-yassine/" target="_blank">view&nbsp;profile</a>
            </Name>
            <img  onClick={() => handleProfileClick()}src={require('../Boufnichel.jpeg')} width="70" height="50" alt="cam"/>

        </Profile>
      </SidebarContainer>
    </Container>
  );
};

export default Sidebar;
