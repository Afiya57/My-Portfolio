import { useState, useRef } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Experiences from './sections/Experiences';
import Services from './sections/Services';
import Contact from './sections/Contact';
import './index.css';
export default function App() {
const [theme,setTheme]=useState('dark');
const homeRef=useRef(null), aboutRef=useRef(null), skillsRef=useRef(null), projectsRef=useRef(null), educationRef=useRef(null), experiencesRef=useRef(null), servicesRef=useRef(null), contactRef=useRef(null);
const scrollToSection=ref=>ref.current?.scrollIntoView({behavior:'smooth'});
return(
<div className={theme}>
<Navbar refs={{homeRef,aboutRef,skillsRef,projectsRef,educationRef,experiencesRef,servicesRef,contactRef}} scrollToSection={scrollToSection} theme={theme} setTheme={setTheme} />
<div ref={homeRef}><Home/></div>
<div ref={aboutRef}><About/></div>
<div ref={skillsRef}><Skills/></div>
<div ref={projectsRef}><Projects/></div>
<div ref={educationRef}><Education/></div>
<div ref={experiencesRef}><Experiences/></div>
<div ref={servicesRef}><Services/></div>
<div ref={contactRef}><Contact/></div>
<Footer/>
</div>
);
}