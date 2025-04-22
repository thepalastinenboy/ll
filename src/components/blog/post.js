import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { BasicLayout } from "../../layouts/basicLayout";
import { BackButton } from "../header/backbutton";
import { CiBookmark } from "react-icons/ci";
import { FcBookmark } from "react-icons/fc";
import { MdOutlineFacebook } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { DiscussionEmbed } from "disqus-react";
import PreloaderContent from "../elements/preloader-content";
import { FacebookProvider, Comments } from "react-facebook";
import { Helmet } from "react-helmet";

const Article = () => {
  const { slug } = useParams();

  // State for storing the sub-subject data
  const [subSubject, setSubSubject] = useState(null);

  // State for tracking whether the sub-subject has been saved
  const [saved, setSaved] = useState(false);

  // State for loading status
  const [loading, setLoading] = useState(true);

  // Fetch the sub-subject from the API
  useEffect(() => {
    const fetchSubSubjectData = async () => {
      try {
        const response = await fetch(
          `https://wh467262.ispot.cc/note-website-backend/api/subjects/sub-subjects/${slug}/`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const subSubjectData = await response.json();
        setSubSubject(subSubjectData);
      } catch (error) {
        console.error("Error fetching sub-subject data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubSubjectData();
  }, [slug]);

  // Load saved sub-subjects from local storage on component mount
  useEffect(() => {
    if (subSubject) {
      const savedSubSubjects =
        JSON.parse(localStorage.getItem("savedSubSubjects")) || [];
      setSaved(savedSubSubjects.includes(subSubject.id));
    }
  }, [subSubject]);

  // Create Facebook share link
  const createFacebookShareLink = () => {
    const url = encodeURIComponent(window.location.href);
    return `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  };

  // Create WhatsApp share link
  const createWhatsAppShareLink = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(subSubject?.name || "");
    return `https://wa.me/?text=${text}%20${url}`;
  };

  // Save or unsave the sub-subject
  const handleSaveClick = () => {
    const savedSubSubjects =
      JSON.parse(localStorage.getItem("savedSubSubjects")) || [];
    if (saved) {
      const index = savedSubSubjects.indexOf(subSubject?.id);
      if (index > -1) {
        savedSubSubjects.splice(index, 1);
        localStorage.setItem("savedSubSubjects", JSON.stringify(savedSubSubjects));
      }
    } else {
      savedSubSubjects.push(subSubject?.id);
      localStorage.setItem("savedSubSubjects", JSON.stringify(savedSubSubjects));
    }
    setSaved(!saved);
  };

  // Display the sub-subject if found, or an error message if not found
  return (
    <BasicLayout ptr>
      <div className="navbar navbar-transparent">
        <div className="navbar-bg" />
        <div className="navbar-inner">
          <div className="left">
            <BackButton />
          </div>
          <div className="title title-navbar-transparent">
            {subSubject ? subSubject.name : "Loading..."}
          </div>
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
                  <a
                    href="#"
                    className={`badge cat-${subSubject?.main_subject?.id || "unknown"}`}
                  >
                    {subSubject?.main_subject?.name || "Unknown Category"}
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
                    <IoLogoWhatsapp size="1.8em" />
                  </a>
                </div>
              </div>

              {loading ? (
                <PreloaderContent />
              ) : subSubject ? (
                <>
                  <Helmet>
                    <title>{`${subSubject.name} - Notes Website`}</title>
                    <meta name="description" content={subSubject.content?.slice(0, 150)} />
                    <meta name="keywords" content={subSubject.main_subject?.name} />
                  </Helmet>
                  <h2>{subSubject.name}</h2>
                  <div
                    className="single-post-content margin-top"
                    dangerouslySetInnerHTML={{ __html: subSubject.content }}
                  ></div>

                  {/* Add the Facebook comments component */}
                  <div className="no-margin">
                    <div className="b2-block-content">
                      <FacebookProvider appId="1586593491845341">
                        <Comments href={window.location.href} width="100%" />
                      </FacebookProvider>
                    </div>
                  </div>
                </>
              ) : (
                <div className="margin-top">
                  <div className="display-flex align-items-center justify-content-space-between">
                    <div className="block-title-medium no-margin block-title text-semibold">
                      Error: Sub-Subject Not Found
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </BasicLayout>
  );
};

export default Article;