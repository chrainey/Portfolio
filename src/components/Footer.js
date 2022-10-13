import { Link } from 'react-router-dom'


const Footer = () => {

  return (
    <div className="footer-container">
        <Link className="footer-links" as={Link} to="/"><p>Home</p></Link>
        <Link className="footer-links" as={Link} to="/about"><p>About</p></Link>
        <Link className="footer-links" as={Link} to="/projects"><p>Projects</p></Link> 
        <Link className="footer-links" as={Link} to="/skills"><p>Skills</p></Link> 
    </div>
  )
}

export default Footer