import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BasicLayout } from "../layouts/basicLayout";
import { Helmet } from "react-helmet";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://ubai.dev/b2lernen.de/api/api.php")
      .then((response) => response.json())
      .then((data) => {
        // Get a list of unique categories
        const uniqueCategories = [...new Set(data.articles.map(article => article.category))];
        setCategories(uniqueCategories);
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
        <div className="b2-block-content">
          <div className="cards cards--12">
            {/* List categories as links */}
            {categories.map((category, index) => (
              <Link
                to={`/category/${category}`}
                className="cardw card--style-icon card--style-round-corners"
                key={index}
              >
                <h4 className="card__title">{category}</h4>
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
