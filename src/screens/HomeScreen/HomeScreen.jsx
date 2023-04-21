import React from "react";
import cover from "../../assets/cover.png";
import logo from "../../assets/logo.png";
import "./HomeScreen.css";
import Tilt from "react-parallax-tilt";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import { articles } from "./Articles";
import { motion } from "framer-motion";
import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const leftContainerAnimation = {
  hidden: {
    x: -50,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 1.5,
    },
  },
};

const rightContainerAnimation = {
  hidden: {
    x: 50,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 1.5,
    },
  },
};

function HomeScreen() {
  const navigate = useNavigate();
  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <Navbar/>
      <div
        className="home_screen_container"
      >
        <motion.div
          className="left_container"
          initial="hidden"
          animate="show"
          variants={leftContainerAnimation}
        >
          <div
            className="home_logo"
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <img
              src={logo}
              alt=""
              style={{ width: "95px", height: "95px", borderRadius: "100%" }}
            />
            <span className="title">Tech Talk Time</span>
          </div>
          <div
            style={{
              width: "450px",
              height: "250px",
              marginTop: "15px",
              boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.5)",
            }}
          >
            <Swiper
              modules={[Pagination]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
            >
              {articles.map((article) => {
                return (
                  <SwiperSlide key={article.id}>
                    <div
                    onClick={() => navigate(`articles/${article.path_suffix}`, {
                      state: {
                        title: article.title,
                        bg_image: article.bg_image,
                        genre: article.genre,
                        duration: article.duration,
                        date: article.date,
                        body: article.body,
                        image_src: article.image_src
                      }
                    })}
                      style={{
                        backgroundImage: `url(${article.bg_image})`,
                        backgroundSize: "cover",
                        display: "flex",
                        // borderRadius: "15px",
                        width: "450px",
                        height: "250px",
                        padding: "10px",
                        gap: "10px",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <span style={{ fontSize: "18px" }}>
                        🕒 {article.duration}
                      </span>
                      <span style={{ fontSize: "25px", maxWidth: "100px" }}>
                        {article.title}
                      </span>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          {/* <a style={{fontSize: "18px", color: "black", marginTop: "30px", fontStyle: "italic"}}>See more</a> */}
          <a href="" onClick={() => navigate('showarticles')} style={{fontSize: "18px", marginTop: "30px", fontStyle: "italic"}}>See more</a>
        </motion.div>
        <motion.div
          className="right_container"
          initial="hidden"
          animate="show"
          variants={rightContainerAnimation}
        >
          <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={cover} alt="" className="cover" />
          </Tilt>
        </motion.div>
      </div>
    </div>
  );
}

export default HomeScreen;
