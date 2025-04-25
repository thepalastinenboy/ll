import React, { useState, useEffect, useRef } from "react";
import { BasicLayout } from "../layouts/basicLayout";
import { BackButton } from "../components/header/backbutton";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleSubSubjects, setVisibleSubSubjects] = useState(5); // Visible sub-subjects
  const [subSubjectData, setSubSubjectData] = useState({ subSubjects: [] }); // Sub-subjects data
  const searchInputRef = useRef();

  // Fetch sub-subjects data from the API
  useEffect(() => {
    const fetchSubSubjectData = async () => {
      try {
        const response = await fetch("https://wh467262.ispot.cc/note-website-backend/api/subjects/sub-subjects/");
        const jsonData = await response.json();
        setSubSubjectData({ subSubjects: jsonData }); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching sub-subject data:", error);
      }
    };

    fetchSubSubjectData();
    searchInputRef.current.focus(); // Focus on the search input
  }, []);

  // Filter sub-subjects based on the search term
  const filteredSubSubjects = subSubjectData.subSubjects.filter(
    (subSubject) =>
      subSubject.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      subSubject.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle search input changes
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Load more sub-subjects
  const handleLoadMore = () => {
    setVisibleSubSubjects((prevVisibleSubSubjects) => prevVisibleSubSubjects + 5);
  };

  return (
    <BasicLayout>
      <Helmet>
        <title>{`Suchen - FIAE`}</title>
        <meta name="keywords" content="deutsch FIAE" />
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
            {/* Render filtered sub-subjects */}
            {filteredSubSubjects.slice(0, visibleSubSubjects).map((subSubject) => (
              <div
                key={subSubject.id}
                className="blog-list display-flex align-items-start flex-direction-row-reverse"
              >
                <div className="blog-list-infos margin-right margin-top">
                  <h2 className="margin-bottom-half no-margin-top">
                    {/* Link to the sub-subject detail page */}
                    <Link to={`/sub-subject/${subSubject.id}`}>
                      {subSubject.name}
                    </Link>
                  </h2>
                  
                </div>
              </div>
            ))}
          </div>
          {/* Load more button */}
          {visibleSubSubjects < filteredSubSubjects.length && (
            <div className="b2-badge text-align-center">
              <div
                className="badge text-color-red text-color-white"
                onClick={handleLoadMore}
              >
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