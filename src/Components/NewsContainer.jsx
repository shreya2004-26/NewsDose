import React from "react";
import NewsCard from "./NewsCard";
import Loader from "./Loader";

const NewsContainer = ({ apiData }) => {
  return (
    <>
      <div className="container mt-4 d-flex flex-column gap-4">
        <div className="text-center fs-2 fw-semibold ">
          Today's Top Headlines
        </div>
        <div className="container">
          <div className="row row-gap-4 justify-content-center">
            {apiData.map((curr, index) => {
              return (
                curr.description && (
                  <div className="col-12 col-md-6 col-lg-4" key={index}>
                    <NewsCard
                      imgSrc={curr.urlToImage}
                      title={curr.title}
                      description={curr.description}
                      source={curr.source.name}
                      publishedAt={curr.publishedAt}
                      url={curr.url}
                    />
                  </div>
                )
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsContainer;
