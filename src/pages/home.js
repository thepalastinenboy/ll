import React from "react";
import LatestProjectsSwiper from "../components/swipers/latest-project";
import { HeaderTop } from "../components";
import { BasicLayout } from "../layouts/basicLayout";
import { Link } from "react-router-dom";
// import data from "../data/KnowledgeBase.json";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/search");
  };

  const categories = ["schreiben", "wortarten", "grammatik", "redemitteln"];
  return (
    <BasicLayout>
      <HeaderTop />
      <div className="b2-block">
        <div className="b2-block-title display-flex align-items-center justify-content-space-between">
          <div>
            <div className="block-title-medium no-margin block-title text-semibold">
              Themen
            </div>
            <div className="b2-opacity block-title no-margin b2-block-subtitle">
              Alle B2 Themen
            </div>
          </div>
          <div className="b2-badge">
            <a href="#" className="badge bg-color-faqehgreen text-color-black">
              Alle
            </a>
          </div>
        </div>
        <div className="b2-block-content">
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
              placeholder="Such ein Thema"
              className="input"
              onClick={handleClick}
            />
          </div>

          <div className="tags display-flex">
            {categories.map((category) => (
              <div key={category} className="b2-badge">
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

      <div className="b2-block">
        <div className="b2-block-title display-flex align-items-center justify-content-space-between">
          <div>
            <div className="block-title-medium no-margin block-title text-semibold">
              Wortschatz
            </div>
            <div className="b2-opacity block-title no-margin b2-block-subtitle">
              Alles was du im B2 merken musst.
            </div>
          </div>
          <div className="b2-badge">
            <Link
              to="/wortschatz-liste"
              className="badge bg-color-faqehgreen text-color-black"
            >
              Alle
            </Link>
          </div>
        </div>
        <div className="b2-block-content">
          <div className="cards cards--12">
            <Link
              to="/wortschatz/verben"
              className="cardw card--style-icon card--style-round-corners"
            >
              <h4 className="card__title">VERBEN</h4>
            </Link>
            <Link
              to="/wortschatz/Beschwerde-Redemitteln"
              className="cardw card--style-icon card--style-round-corners"
            >
              <h4 className="card__title">Beschwerde Redemitteln</h4>
            </Link>
            <Link
              to="/wortschatz/verben-mit-praepositionen"
              className="cardw card--style-icon card--style-round-corners"
            >
              <h4 className="card__title">VERBEN MIT PRÄPOSITIONEN</h4>
            </Link>
            <Link
              to="/wortschatz/thema-medzin"
              className="cardw card--style-icon card--style-round-corners"
            >
              <h4 className="card__title">THEMA MEDZIN</h4>
            </Link>
          </div>
        </div>
      </div>

      <LatestProjectsSwiper />

      <div className="b2-block">
        <div className="b2-block-title display-flex align-items-center justify-content-space-between">
          <div>
            <div className="block-title-medium no-margin block-title text-semibold">
              Top-Thema
            </div>
            <div className="b2-opacity block-title no-margin b2-block-subtitle">
              Am liebsten besucht
            </div>
          </div>
        </div>
        <div className="b2-block-content">
          <div className="blog-list-wrapper">
            <div className="blog-list display-flex align-items-start">
              <div className="blog-list-infos margin-left">
                <div className="b2-badge">
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
                <div className="b2-badge">
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
                <div className="b2-badge">
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
                <div className="b2-badge">
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
    </BasicLayout>
  );
};

export default Home;
