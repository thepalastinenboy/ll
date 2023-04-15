import React, { useState, useEffect, useRef } from "react";
import { BasicLayout } from "../layouts/basicLayout";
import { BackButton } from "../components/header/backbutton";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleArticles, setVisibleArticles] = useState(5);
  const [articleData, setArticleData] = useState({ articles: [] });
  const searchInputRef = useRef();

  useEffect(() => {
    const fetchArticleData = async () => {
      try {
        const response = await fetch("https://www.b2lernen.de/api/api.php");
        const jsonData = await response.json();
        setArticleData(jsonData);
      } catch (error) {
        console.error("Error fetching article data:", error);
      }
    };

    fetchArticleData();
    searchInputRef.current.focus();
  }, []);

  const filteredArticles = articleData.articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleLoadMore = () => {
    setVisibleArticles((prevVisibleArticles) => prevVisibleArticles + 5);
  };


  return (
    <BasicLayout>
      <Helmet>
        <title>{`Suchen - B2 Lernen`}</title>
        <meta name="keywords" content="deutsch b2 lernen" />
      </Helmet>
      <div className="navbar navbar-transparent">
        <div className="navbar-bg" />
        <div className="navbar-inner">
          <div className="left">
            <BackButton />
          </div>
          <div className="title title-navbar-transparent">Suche</div>
        </div>
      </div>
      <div className="b2-block">
        <div className="b2-search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-search"
          >
            <circle cx={11} cy={11} r={8} />
            <line x1={21} y1={21} x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="Suchen"
            className="input"
            value={searchTerm}
            onChange={handleSearchChange}
            ref={searchInputRef}
          />
        </div>
      </div>
      <div className="b2-block no-border">
        <div className="b2-block-content">
          <div className="blog-list-wrapper">
            {filteredArticles.slice(0, visibleArticles).map((article) => (
              <div
                key={article.id}
                className="blog-list display-flex align-items-start flex-direction-row-reverse"
              >
                <div className="blog-list-infos margin-right margin-top">
                  <h2 className="margin-bottom-half no-margin-top">
                    <Link to={`/article/${article.id}`}>{article.title}</Link>
                  </h2>
                </div>
              </div>
            ))}
          </div>
          {visibleArticles < filteredArticles.length && (
            <div className="b2-badge text-align-center">
              <div className="badge text-color-red text-color-white" onClick={handleLoadMore}>
                Mehr laden
              </div>
            </div>
          )}
        </div>
      </div>
    </BasicLayout>
  );
};

export default Search;