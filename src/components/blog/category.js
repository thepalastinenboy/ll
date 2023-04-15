import React, { useState, useEffect } from "react";
import "./KnowledgeBase.css";
import { BasicLayout } from "../../layouts/basicLayout";
import { BackButton } from "../header/backbutton";
import { useParams, Link } from "react-router-dom";
import {Loader } from "../";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";




const KnowledgeBase = () => {
  const { category } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const previousLocation = location.state?.from;

  useEffect(() => {
    setLoading(true);
    fetch("https://www.b2lernen.de/api/api.php")
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles);
        setLoading(false);
      });
  }, []);

  const filteredArticles = articles.filter(
    (article) =>
      article.category.toLowerCase() === category.toLowerCase() &&
      article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <BasicLayout headerTop>
      <Helmet>
                <title>{`${category} - B2 Lernen`}</title>
                <meta name="keywords" content={`${category},deutsch ,b2 lernen`} />
              </Helmet>
      <div className="navbar navbar-transparent">
        <div className="navbar-bg"></div>
        <div className="navbar-inner">
          <div className="left">
            <BackButton />
          </div>
          <div className="title title-navbar-transparent">{category}</div>
        </div>
      </div>
      <div className="b2-block no-border">
        <div className="b2-opacity block-title no-margin b2-block-subtitle">
        Übersicht Detusch B2 {category}
        </div>
      </div>

      {loading ? (
        <Loader />
      ) : (
        <div className="b2-block no-border">
          <div className="b2-block-content">
            <div className="blog-list-wrapper">
              {filteredArticles.map((article) => (
                <div
                  key={article.id}
                  className="blog-list display-flex align-items-start flex-direction-row-reverse"
                >
                  <div className="blog-list-infos margin-right margin-top">
                    <h2 className="margin-bottom-half no-margin-top">
                      <Link to={`/article/${article.slug}`}>{article.title}</Link>
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </BasicLayout>
  );
};

export default KnowledgeBase;
