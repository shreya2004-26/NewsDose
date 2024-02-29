import React from "react";

const NewsCard = ({ imgSrc, title, description, source, publishedAt, url }) => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={
            imgSrc ??
            "https://images.hindustantimes.com/img/2021/09/09/1600x900/BREAKING_NEWS_1631230366821_1631230369778.jpg"
          }
          className="card-img-top"
          alt="..."
          style={{ height: "220px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0, 45) + " ..."}</h5>
          <p className="card-text">{description.slice(0, 115) + " ... "}</p>
          <p className="card-text">
            <small className="text-body-secondary">
              By {source.slice(0, 10)} on {publishedAt}
            </small>
          </p>
          <a
            href={url}
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Read More
          </a>
        </div>
        <span className="position-absolute top-0 start-50 ms-5 translate-middle badge rounded-pill bg-danger">
          {source}
          <span className="visually-hidden">unread messages</span>
        </span>
      </div>
    </>
  );
};

export default NewsCard;
