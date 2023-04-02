import React from "react";
import articleData from "../../data/KnowledgeBase.json";
import { useParams } from "react-router-dom";
import { BasicLayout } from "../../layouts/basicLayout";
import { BackButton } from "../header/backbutton";

const Article = () => {
  const { id } = useParams();

  // Find the article with matching ID
  const article = articleData.articles.find(
    (article) => article.id === parseInt(id)
  );

  // Display the article if found, or an error message if not found
  return article ? (
    <BasicLayout>

      <div className="navbar navbar-transparent">
        <div className="navbar-bg" />
        <div className="navbar-inner">
          <div className="left">
            <BackButton />
          </div>
          <div className="title title-navbar-transparent">
            {article.title}
          </div>
        </div>
      </div>

      <div className="newsman-block no-margin">
        <div className="newsman-block-content">
          <div className="single-page">
            <div className="margin-top">
              <div className="newsman-badge">
                <a href="#" className="badge color-red text-color-white">
                  {article.category}
                </a>
              </div>
              <h2>{article.title}</h2>
              <div
                className="single-post-content margin-top"
                dangerouslySetInnerHTML={{ __html: article.content }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </BasicLayout>
  ) : (
    <BasicLayout>
      <div>
        <h1>Error: Article not found</h1>
      </div>
    </BasicLayout>
  );
};

export default Article;
