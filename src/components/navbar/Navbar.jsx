import React from "react";
import { motion } from "framer-motion";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Github from "@iconscout/react-unicons/icons/uil-github";
import "./Navbar.css";

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
    },
  },
};

function Navbar() {
  return (
    <div>
      <motion.div
        initial="hidden"
        animate="show"
        variants={navAnimation}
        style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
      >
        <a
          href="https://twitter.com/REM_016_21?t=WYgGN5e-0t7gHa4mLuEcmw&s=09"
          target="_blank"
          rel="noreferrer"
        >
          <Twitter size="1.5rem" className="nav_icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/kaung-htet-716305254"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedIn size="1.5rem" className="nav_icon" />
        </a>
        <a
          href="https://www.facebook.com/kaunghtet.kyaw.3154"
          target="_blank"
          rel="noreferrer"
        >
          <Facebook size="1.5rem" className="nav_icon" />
        </a>
        <a
          href="https://github.com/KaungHtet21"
          target="_blank"
          rel="noreferrer"
        >
          <Github size="1.5rem" className="nav_icon" />
        </a>
      </motion.div>
    </div>
  );
}

export default Navbar;
