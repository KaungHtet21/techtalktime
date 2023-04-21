import React from "react";
import { articles } from "../HomeScreen/Articles";
import "./ShowArticles.css";
import Navbar from "../../components/navbar/Navbar";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

function ShowArticles() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "90%",
          alignItems: "center",
        }}
      >
        <div
          onClick={() => navigate("/")}
          className="home_logo"
          style={{
            display: "flex",
            alignItems: "center",
            paddingTop: "50px",
          }}
        >
          <img
            src={logo}
            alt=""
            style={{ width: "65px", height: "65px", borderRadius: "100%" }}
          />
          <span className="article_title">Tech Talk Time</span>
        </div>
        <Navbar />
      </div>

      <ul className="articles_grid">
        {articles.map((article, index) => {
          return (
            <div
              style={{
                backgroundImage: `url(${article.bg_image})`,
                backgroundSize: "cover",
              }}
              onClick={() =>
                navigate(`/articles/${article.path_suffix}`, {
                  state: {
                    title: article.title,
                    bg_image: article.bg_image,
                    genre: article.genre,
                    duration: article.duration,
                    date: article.date,
                    body: article.body,
                    image_src: article.image_src,
                  },
                })
              }
            >
              <li
                key={index}
                className="article_container"
              >
                <span style={{ fontSize: "18px" }}>🕒 {article.duration}</span>
                <span style={{ fontSize: "25px", maxWidth: "100px" }}>
                  {article.title}
                </span>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default ShowArticles;
