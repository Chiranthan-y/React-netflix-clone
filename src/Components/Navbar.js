import React,{useState,useEffect} from 'react'
import "./Navbar.css"

const Navbar = () => {
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 360) {
                handleShow(true);
            } else handleShow(false);
        })
    }, [show])    
    return (
        <div className={`navbar ${show && "navbar__black" }`}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="netflix logo"  className="navbar__logo"/>
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png" alt="netflix logo" className="navbar__avatar"/>
        </div>
    )
}

export default Navbar
