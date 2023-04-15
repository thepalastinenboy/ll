import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BasicLayout } from "../layouts/basicLayout";
import { BackButton } from "../components/header/backbutton";
import articles from "../data/KnowledgeBase.json";
import ubungs from "../data/ubungs.json";
import { Helmet } from "react-helmet";
// import "./saved.css";

const SavedContent = () => {
  const [savedArticles, setSavedArticles] = useState([]);
  const [savedPractices, setSavedPractices] = useState([]);

  useEffect(() => {
    // Get saved articles from local storage
    const storedSavedArticles =
      JSON.parse(localStorage.getItem("savedArticles")) || [];
    setSavedArticles(storedSavedArticles);

    // Get saved practices from local storage
    const storedSavedPractices =
      JSON.parse(localStorage.getItem("savedPractices")) || [];
    setSavedPractices(storedSavedPractices);
  }, []);

  const handleRemoveSavedArticleClick = (id) => {
    const updatedSavedArticles = savedArticles.filter((item) => item !== id);
    localStorage.setItem("savedArticles", JSON.stringify(updatedSavedArticles));
    setSavedArticles(updatedSavedArticles);
  };

  const handleRemoveSavedPracticeClick = (slug) => {
    const updatedSavedPractices = savedPractices.filter(
      (item) => item !== slug
    );
    localStorage.setItem(
      "savedPractices",
      JSON.stringify(updatedSavedPractices)
    );
    setSavedPractices(updatedSavedPractices);
  };

  const getArticle = (id) => {
    const article = articles.articles.find((article) => article.id === id);
    return article ? article : null;
  };

  const getPractice = (slug) => {
    return ubungs.practices.find((practice) => practice.slug === slug);
  };

  return (
    <BasicLayout>
      <Helmet>
        <title>{`Gespeicherte Liste - B2 Lernen`}</title>
        <meta name="keywords" content="deutsch b2 lernen" />
      </Helmet>
      <div className="navbar navbar-transparent">
        <div className="navbar-bg" />
        <div className="navbar-inner">
          <div className="left">
            <BackButton />
          </div>
          <div className="title title-navbar-transparent">Saved</div>
        </div>
      </div>
      {savedArticles.length > 0 && (
        <>
          <div className="b2-block no-border">
            <div className="b2-block-title display-flex align-items-center justify-content-space-between">
              <div className="block-title-medium no-margin block-title text-semibold">
              Gespeicherte Themen
              </div>
            </div>
          </div>

          <div className="b2-block">
            <div className="b2-block-content">
              <div className="list-saved">
                {savedArticles.map(
                  (id) =>
                    getArticle(id) && (
                      <div
                        key={id}
                        className="no-border display-flex align-items-center justify-content-space-between"
                      >
                        <div className="list-item-seved display-flex align-items-center">
                          <div className="post-author display-flex align-items-center">
                            <div className="post-author-infos margin-left-half">
                              <span className="post-author-name display-block text-semibold">
                                <Link to={`/article/${id}`}>
                                  {getArticle(id).title}
                                </Link>
                              </span>
                            </div>
                          </div>

                          <div className="b2-badge">
                            <div
                              onClick={() => handleRemoveSavedArticleClick(id)}
                              className="badge color-yellow text-color-black p-10"
                            >
                              Löschen
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
        </>
      )}

      {savedPractices.length > 0 && (
        <>
          <div className="b2-block no-border">
            <div className="b2-block-title display-flex align-items-center justify-content-space-between">
              <div className="block-title-medium no-margin block-title text-semibold">
                Gespeichrte Übungen
              </div>
            </div>
          </div>

          <div className="b2-block">
            <div className="b2-block-content">
              <div className="list-saved">
                {savedPractices.map(
                  (slug) =>
                    getPractice(slug) && (
                      <div
                        key={slug}
                        className="no-border display-flex align-items-center justify-content-space-between"
                      >
                        <div className="list-item-seved display-flex align-items-center">
                          <div className="post-author display-flex align-items-center">
                            <div className="post-author-infos margin-left-half">
                              <span className="post-author-name display-block text-semibold">
                                <Link to={`/ubung/${slug}`}>
                                  {getPractice(slug).name}
                                </Link>
                              </span>
                            </div>
                          </div>

                          <div className="b2-badge">
                            <div
                              onClick={() =>
                                handleRemoveSavedPracticeClick(slug)
                              }
                              className="badge color-yellow text-color-black p-10"
                            >
                              Löschen
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
        </>
      )}

      {savedArticles.length === 0 && savedPractices.length === 0 && (
        <div className="b2-block">
          <div className="b2-block-content">
            <p>Du hast noch keinen Inhalt gespeichert.</p>
          </div>
        </div>
      )}
    </BasicLayout>
  );
};
export default SavedContent;
