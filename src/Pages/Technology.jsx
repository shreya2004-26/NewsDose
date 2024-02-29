import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import NewsContainer from "../Components/NewsContainer";

const Technology = () => {
  const [apiData, setApiData] = useState([]);
  const getApiDataFunc = async () => {
    //get api data from url
    const resp = await fetch(
      "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=b0d4631fe22a4522a5587398513e457b"
    );
    //change in  json
    const jsonData = await resp.json();
    console.log(jsonData.articles);
    setApiData(jsonData.articles);
  };
  useEffect(() => {
    getApiDataFunc();
  }, []);
  return (
    <>
      <Header />
      <NewsContainer apiData={apiData} />
    </>
  );
};

export default Technology;
