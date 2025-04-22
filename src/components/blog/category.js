import React, { useState, useEffect } from "react";
import "./KnowledgeBase.css";
import { BasicLayout } from "../../layouts/basicLayout";
import { BackButton } from "../header/backbutton";
import { useParams, Link } from "react-router-dom";
import {Loader } from "../";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";



const KnowledgeBase = () => {
  const { id } = useParams(); // Extract the `id` parameter from the URL
  const [subSubjects, setSubSubjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch sub-subjects for the given main subject
  useEffect(() => {
    const fetchSubSubjects = async () => {
      try {
        if (!id) {
          throw new Error("ID is missing in the URL");
        }

        const response = await fetch(
          `https://wh467262.ispot.cc/note-website-backend/api/subjects/main-subjects/${id}/`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setSubSubjects(data.sub_subjects); // Extract sub-subjects from the response
      } catch (error) {
        console.error("Error fetching sub-subjects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubSubjects();
  }, [id]);

  return (
    <BasicLayout headerTop>
      <Helmet>
        <title>Sub-Subjects - Knowledge Base</title>
        <meta name="keywords" content="sub-subjects, knowledge base, notes" />
      </Helmet>
      <div className="navbar navbar-transparent">
        <div className="navbar-bg"></div>
        <div className="navbar-inner">
          <div className="left">
            <BackButton />
          </div>
          <div className="title title-navbar-transparent">Sub-Subjects</div>
        </div>
      </div>
      <div className="b2-block no-border">
        <div className="b2-opacity block-title no-margin b2-block-subtitle">
          Overview of Sub-Subjects
        </div>
      </div>

      {loading ? (
        <Loader />
      ) : subSubjects.length > 0 ? (
        <div className="b2-block no-border">
          <div className="b2-block-content">
            <div className="blog-list-wrapper">
              {subSubjects.map((subject) => (
                <div
                  key={subject.id}
                  className="blog-list display-flex align-items-start flex-direction-row-reverse"
                >
                  <div className="blog-list-infos margin-right margin-top">
                    <h2 className="margin-bottom-half no-margin-top">
                      <Link to={`/sub-subject/${subject.slug}`}>
                        {subject.name}
                      </Link>
                    </h2>
                    <p className="description">{subject.content?.slice(0, 150)}...</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="no-results">
          <p>No sub-subjects found for this category.</p>
        </div>
      )}
    </BasicLayout>
  );
};

export default KnowledgeBase;