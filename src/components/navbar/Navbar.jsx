import React from 'react'
import { motion } from "framer-motion";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Github from "@iconscout/react-unicons/icons/uil-github";
import "./Navbar.css"

const navAnimation = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 1.5,
      }
    }
  }
  

function Navbar() {
  return (
    <div>
      <motion.div initial="hidden" animate="show" variants={navAnimation} style={{width: "100%", display: "flex", justifyContent: "flex-end"}}>
        <Twitter size="1.5rem" className="nav_icon"/>
        <Facebook size="1.5rem" className="nav_icon"/>
        <LinkedIn size="1.5rem" className="nav_icon"/>
        <Github size="1.5rem" className="nav_icon"/>
      </motion.div>
    </div>
  )
}

export default Navbar
