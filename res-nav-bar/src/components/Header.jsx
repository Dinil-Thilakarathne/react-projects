import { useState } from "react"
import logo from "../assets"
import { motion } from "framer-motion"

const Header = () => {

    const [isOpen, setIsOpen] = useState(false)

    // framer motion variant for navbar animation 
    const navbar = {
        open: () => ({
          clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 0)',
          transition: {
            type: "spring",
            stiffness: 200,
            restDelta: 1,
          }
        }),
        closed: () => ({
          clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)',
          transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
          }
        })
    };

    const navLinks = [
        {lable: "Home", icon: "bx bx-home"},
        {lable: "Projects", icon: "bx bx-briefcase"},
        {lable: "Blog", icon: "bx bx-edit"},
        {lable: "Testimonials", icon: "bx bx-message-square-dots"},
        {lable: "About us", icon: "bx bx-info-circle"},
        {lable: "Contact us", icon: "bx bx-envelope"},
    ]

    return (
        <div className="header">
            <div className="header__logo">
                <img src={logo} alt=""/>
                <h1>Sona Code</h1>
            </div>
            <div className="header__icon">
                <i class='bx bx-menu' onClick={() => setIsOpen(isOpen => !isOpen)}></i>
            </div>
            <motion.ul 
                className="header__nav"
                animate={isOpen ? "open" : "closed"}
                variants={navbar}
            >
                {navLinks.map((link) => (
                 <li 
                    className="nav-item" 
                    key={link.lable}
                    onClick={() => setIsOpen(isOpen => !isOpen)}
                >
                    <i className={link.icon}></i>
                    {link.lable}
                 </li>
                ))}
            </motion.ul>
        </div>
    )
}

export default  Header