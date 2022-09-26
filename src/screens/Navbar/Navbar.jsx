import {useState, useEffect} from "react";
import "./Navbar.css";
import hamBtn from "./hamburger-menu.svg";

function Navbar() {
    const [showLinks, setShowLinks] = useState(true);
    const [showBtn, setShowBtn] = useState(false);

    const handleClick = () => setShowLinks(!showLinks);

    window.addEventListener("resize", (e) => {
        if (e.target.innerWidth > 768) {
            setShowBtn(false);
            setShowLinks(true);

        } else {
            setShowBtn(true);
            setShowLinks(false);
        }
    })

    useEffect(() => {
        if (window.innerWidth > 768) {
            setShowBtn(false);
            setShowLinks(true);

        } else {
            setShowBtn(true);
            setShowLinks(false);
        }
    }, [])

  return (
    <div className="navbar-container">
        <div className="navbar-name">
            <div>Sona Kim</div>
            {showBtn && <img alt="hamburger menu" src={hamBtn} onClick={handleClick}/>}
            </div>

    {showLinks && (   
         <div className="navbar-links-container">
      <a href="#home">Home</a>
      <a href="#aboutme">About Me</a>
      <a href="#technologies">Technologies</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#contact">Contact</a>
    </div>
    )}

    </div>
  );
}

export default Navbar;