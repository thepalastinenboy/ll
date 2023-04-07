import React, { useState, useEffect } from "react";
import articleData from "../../data/KnowledgeBase.json";
import { useParams } from "react-router-dom";
import { BasicLayout } from "../../layouts/basicLayout";
import { BackButton } from "../header/backbutton";
import { CiBookmark } from "react-icons/ci";
import { FcBookmark } from "react-icons/fc";
import {MdOutlineFacebook } from "react-icons/md";
import {IoLogoWhatsapp} from "react-icons/io";
import { DiscussionEmbed } from "disqus-react";

const Article = () => {
  const { id } = useParams();

  // Find the article with matching ID
  const article = articleData.articles.find(
    (article) => article.id === parseInt(id)
  );

  // State for tracking whether the article has been saved
  const [saved, setSaved] = useState(false);

  const disqusConfig = {
    shortname: "b2lernen",
    config: {
      identifier: article.id.toString(), // Convert the number to a string
      title: article.title,
    },
  };
  // Load saved articles from local storage on component mount
  useEffect(() => {
    const savedArticles =
      JSON.parse(localStorage.getItem("savedArticles")) || [];
    setSaved(savedArticles.includes(article.id));
  }, [article.id]);

  // share button
  const createFacebookShareLink = () => {
    const url = encodeURIComponent(window.location.href);
    return `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  };

  // Function to create the WhatsApp share link
  const createWhatsAppShareLink = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(article.title);
    return `https://wa.me/?text=${text}%20${url}`;
  };

  // Function to save or unsave the article
  const handleSaveClick = () => {
    const savedArticles =
      JSON.parse(localStorage.getItem("savedArticles")) || [];
    if (saved) {
      const index = savedArticles.indexOf(article.id);
      savedArticles.splice(index, 1);
      localStorage.setItem("savedArticles", JSON.stringify(savedArticles));
    } else {
      savedArticles.push(article.id);
      localStorage.setItem("savedArticles", JSON.stringify(savedArticles));
    }
    setSaved(!saved);
  };

  // Display the article if found, or an error message if not found
  return article ? (
    <BasicLayout>
      <div className="navbar navbar-transparent">
        <div className="navbar-bg" />
        <div className="navbar-inner">
          <div className="left">
            <BackButton />
          </div>
          <div className="title title-navbar-transparent">{article.title}</div>
          <div className="right save-b">
            <button className="button" onClick={handleSaveClick}>
              {saved ? (
                <FcBookmark size="2em" color="#38ccc7" className="saved-a" />
              ) : (
                <CiBookmark size="2em" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="b2-block no-margin">
        <div className="b2-block-content">
          <div className="single-page">
            <div className="margin-top">
              <div className="display-flex align-items-center justify-content-space-between">
                <div className="b2-badge">
                  <a href="#" className={`badge cat-${article.category}`}>
                    {article.category}
                  </a>
                </div>

                <div className="share-buttons">
                  <a
                    href={createFacebookShareLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="facebook-share"
                  >
                    <MdOutlineFacebook size="1.8em" />
                  </a>
                  <a
                    href={createWhatsAppShareLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-share"
                  >
                    <IoLogoWhatsapp  size="1.8em" />
                  </a>
                </div>
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
      {/* Add the Disqus component */}
      <div className="b2-block no-margin">
        <div className="b2-block-content">
          <DiscussionEmbed {...disqusConfig} />
        </div>
      </div>
    </BasicLayout>
  ) : (
    <BasicLayout>
      <div className="b2-block no-border">
        <div className="b2-block-title display-flex align-items-center justify-content-space-between">
          <div className="block-title-medium no-margin block-title text-semibold">
            Error: Kein Thema not found
          </div>
        </div>
      </div>
    </BasicLayout>
  );
};

export default Article;
