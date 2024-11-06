// Navbar.tsx
import React, { useState } from 'react';
import '../styles/NavBar.css'  // Assuming you're using an external CSS file
import { Progress } from '@/components/ui/progress';
import useWindowDimensions from '@/app/hooks/useWindowDimensions';

const NavBar: React.FC = () => {
    const [pageProgress, setPageProgress] = useState(0);
    const { width } = useWindowDimensions();

    const getProgressPoint = (e) => {
        
        const element = document.querySelector(`#${e.currentTarget.id}`);
        const rect = element.getBoundingClientRect();
        const rightMost = rect.right;
        
       return (rightMost / width) * 100;
    }

    return (
      <div className="fixed top-0 left-0 right-0">
        <nav className="navbar">
            <div className="navbar-brand">
            <a id='home-nav' href="#home" onClick={(e) => {setPageProgress(getProgressPoint(e))}}>Cavan Gary</a>
            </div>
            <ul className="navbar-links">
            <li id='about-nav' onClick={(e) => {setPageProgress(getProgressPoint(e))}}><a href="#about">About</a></li>
            <li id='about-test-nav' onClick={(e) => {setPageProgress(getProgressPoint(e))}}><a href="#about-test">About Test</a></li>
            <li id='projects-nav' onClick={(e) => {setPageProgress(getProgressPoint(e))}}><a href="#projects">Projects</a></li>
            <li id='project-cards-nav' onClick={(e) => {setPageProgress(getProgressPoint(e))}}><a href="#project-cards">Project Cards(test)</a></li>
            <li id='contact-nav' onClick={(e) => {setPageProgress(getProgressPoint(e))}}><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        <Progress className='fixed top-16 w-full z-40' value={pageProgress} />
      </div>

    );
  };
  
  export default NavBar;