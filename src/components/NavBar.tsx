import { Link } from 'react-router-dom'; 

// Functional component for Navigation Bar
const NavBar = () => {
  return (
    <nav>
      {/* Unordered list containing navigation links */}
      <ul>
        {/* Navigation Links using Link component for routing */}
        <li><Link to="/">Home</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/volunteer">Volunteer Work</Link></li>
        <li><Link to="/projects">Projects</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
