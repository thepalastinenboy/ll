import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BasicLayout } from "../layouts/basicLayout";
import { Helmet } from "react-helmet";

const CategoryList = () => {
  const [mainSubjects, setMainSubjects] = useState([]);

  useEffect(() => {
    fetch("https://wh467262.ispot.cc/note-website-backend/api/subjects/main-subjects/")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setMainSubjects(data);
      })
      .catch((error) => {
        console.error("Error fetching main subjects:", error);
      });
  }, []);

  return (
    <BasicLayout headerTop>
      <Helmet>
        <title>{`Themen - B2 Lernen`}</title>
        <meta name="keywords" content="deutsch b2 lernen" />
      </Helmet>
      <div>
        <div className="b2-block">
          <div className="b2-block-title display-flex align-items-center justify-content-space-between">
            <div>
              <div className="block-title-medium no-margin block-title text-semibold">
                Themen Liste
              </div>
              <div className="b2-opacity block-title no-margin b2-block-subtitle">
                Alle B2 Themen.
              </div>
            </div>
          </div>
          <div className="b2-block-content catlist">
            <div className="cards cards--12">
              {mainSubjects.map((subject) => (
                <Link
                  to={`/category/${subject.id}`}
                  className="cardw card--style-icon card--style-round-corners"
                  key={subject.id}
                >
                  <h4 className="card__title">{subject.name}</h4>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </BasicLayout>
  );
};

export default CategoryList;
