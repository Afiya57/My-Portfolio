import '../index.css';
export default function Navbar({refs,scrollToSection,theme,setTheme}){
return(
<div className="navbar">
<h2>Afia Portfolio</h2>
<div>
<a onClick={()=>scrollToSection(refs.homeRef)}>Home</a>
<a onClick={()=>scrollToSection(refs.aboutRef)}>About</a>
<a onClick={()=>scrollToSection(refs.skillsRef)}>Skills</a>
<a onClick={()=>scrollToSection(refs.projectsRef)}>Projects</a>
<a onClick={()=>scrollToSection(refs.educationRef)}>Education</a>
<a onClick={()=>scrollToSection(refs.experiencesRef)}>Experiences</a>
<a onClick={()=>scrollToSection(refs.servicesRef)}>Services</a>
<a onClick={()=>scrollToSection(refs.contactRef)}>Contact</a>
</div>
<button className="toggle-btn" onClick={()=>setTheme(theme==='dark'?'light':'dark')}>{theme==='dark'?'Light Mode':'Dark Mode'}</button>
</div>
);
}