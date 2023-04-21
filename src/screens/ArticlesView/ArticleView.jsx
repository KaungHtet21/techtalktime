import React from "react";
import "./ArticleView.css";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

function ArticleView() {
  const location = useLocation();
  const contents = location.state.body;
  const image_srcs = location.state.image_src;

  return (
    <div className="av-wrapper">
      <div
        className="av-heading"
        style={{ backgroundImage: `url(${location.state.bg_image})` }}
      >
        <Navbar/>
        <div className="av-heading-meta">
          <div className="av-genre">
            <span>{location.state.genre}</span>
          </div>
          <br />
          <span>{location.state.title}</span>
          <span>Kaung Htet Kyaw • 🕒 {location.state.date}</span>
          <span>Estimate duration : {location.state.duration}</span>
        </div>
      </div>
      {contents.map((content) => {
        return (
          <div className="av-content-area">
            <h2>{content.content_title}</h2>
            <img src={content.image} alt="" />
            <p>{content.content_body}</p>
          </div>
        );
      })}
      <div className="av-src-container">
        <h3>Source of Images</h3>
        {image_srcs.map((src) => {
          return (
            <div className="av-links">
              <a href={src.link} target="_blank" rel="noreferrer">{src.link}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ArticleView;
