import React from "react";
import LatestProjectsSwiper from "../components/swipers/latest-project";
import {
  IntroSection,
  Testimonial,
  LatestBlogPosts,
  Footer,
} from "../components";
import { HeaderTop } from "../components";
import { BasicLayout } from "../layouts/basicLayout";
import { Link } from "react-router-dom";
import data from "../data/KnowledgeBase.json";

const Home = () => {
  const categories = [
    ...new Set(data.articles.map((article) => article.category)),
  ];
  return (
    <BasicLayout>
      <HeaderTop />
      <div className="newsman-block">
        <div className="newsman-block-title display-flex align-items-center justify-content-space-between">
          <div>
            <div className="block-title-medium no-margin block-title text-semibold">
              Themen
            </div>
            <div className="newsman-opacity block-title no-margin newsman-block-subtitle">
              Alle B2 Themen
            </div>
          </div>
          <div className="newsman-badge">
            <a href="#" className="badge bg-color-white text-color-black">
              Alle
            </a>
          </div>
        </div>
        <div className="newsman-block-content">
          <div className="newsman-search">
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
              placeholder="Such ein Thema"
              className="input"
            />
          </div>

          <div className="tags display-flex">
            {categories.map((category) => (
              <div key={category} className="newsman-badge">
                <Link
                  to={`/category/${category}`}
                  className={`badge cat-${category}`}
                >
                  {category}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>



      <LatestProjectsSwiper />

      <div className="newsman-block">
        <div className="newsman-block-title display-flex align-items-center justify-content-space-between">
          <div>
            <div className="block-title-medium no-margin block-title text-semibold">
              Wortschatz und Vokabeln
            </div>
            <div className="newsman-opacity block-title no-margin newsman-block-subtitle">
              Alles was du im B2 merken musst.
            </div>
          </div>
        </div>
        <div className="newsman-block-content">
          <div className="cards cards--12">
            <div className="cardw card--style-icon card--style-round-corners">
              <h4 className="card__title">Verben</h4>
            </div>
            <div className="cardw card--style-icon card--style-round-corners">
              <h4 className="card__title">Vokabeln</h4>
            </div>
            <div className="cardw card--style-icon card--style-round-corners">
              <h4 className="card__title">Verben mit Präpositzion</h4>
            </div>
            <div className="cardw card--style-icon card--style-round-corners">
              <h4 className="card__title">Verben mit Präpositzion</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="newsman-block">
        <div className="newsman-block-title display-flex align-items-center justify-content-space-between">
          <div>
            <div className="block-title-medium no-margin block-title text-semibold">
              Top-Thema
            </div>
            <div className="newsman-opacity block-title no-margin newsman-block-subtitle">
              Am liebsten besucht
            </div>
          </div>
        </div>
        <div className="newsman-block-content">
          <div className="blog-list-wrapper">
            <div className="blog-list display-flex align-items-start">
              <div className="blog-list-infos margin-left">
                <div className="newsman-badge">
                  <a href="#" className="badge cat-schreiben">
                    Schreiben
                  </a>
                </div>
                <h2 className="margin-bottom-half">
                  <a href="/single/">Beschwerde über eine Reise</a>
                </h2>
              </div>
            </div>

            <div className="blog-list display-flex align-items-start">
              <div className="blog-list-infos margin-left">
                <div className="newsman-badge">
                  <a href="#" className="badge cat-grammatik">
                    Grammatik
                  </a>
                </div>
                <h2 className="margin-bottom-half">
                  <a href="/single/">Das Passiv</a>
                </h2>
              </div>
            </div>

            <div className="blog-list display-flex align-items-start">
              <div className="blog-list-infos margin-left">
                <div className="newsman-badge">
                  <a href="#" className="badge cat-redemitteln">
                    Redemitteln
                  </a>
                </div>
                <h2 className="margin-bottom-half">
                  <a href="/single/">Diskkussion Redemitteln</a>
                </h2>
              </div>
            </div>
            <div className="blog-list display-flex align-items-start">
              <div className="blog-list-infos margin-left">
                <div className="newsman-badge">
                  <a href="#" className="badge color-purple cat-wortarten">
                    Wortschatz
                  </a>
                </div>
                <h2 className="margin-bottom-half">
                  <a href="/single/">Verben mit Präpositsion</a>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hot topics */}

      {/* Empty div */}
    </BasicLayout>
  );
};

export default Home;
