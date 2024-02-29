import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import NewsContainer from "../Components/NewsContainer";

const Home = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [apiData, setApiData] = useState([]);
  const getApiDataFunc = async () => {
    //get api data from url
    const resp = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=${apiKey}`
    );
    //change in  json
    const jsonData = await resp.json();
    setApiData(jsonData.articles);
  };
  useEffect(() => {
    document.getElementById("title").innerText = "NewsDose - Home";
    getApiDataFunc();
  }, []);
  return (
    <>
      <Header />
      <NewsContainer apiData={apiData} />
    </>
  );
};

export default Home;
