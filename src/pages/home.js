import React from "react";
import ThemenSwiper from "../components/swipers/Themen";
import { HeaderTop } from "../components";
import { BasicLayout } from "../layouts/basicLayout";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import UbungsListPopular from "../components/elements/ubungbelibte";
import Greeting from "../components/elements/greeting";
import { Helmet } from "react-helmet";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/search");
  };

  const categories = ["schreiben", "wortarten", "grammatik", "redemitteln"];
  return (
    <BasicLayout>
      <HeaderTop />
      <Helmet>
        <title>{`Deutsch B2 Lernen: Alles, was Sie für den B2-Sprachkurs benötigen - B2 Lernen`}</title>
        <meta name="keywords" content="deutsch b2 lernen" />
      </Helmet>
      <ThemenSwiper />
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
              to="/wortschatz/Thema-Wohnung"
              className="cardw card--style-icon card--style-round-corners"
            >
              <h4 className="card__title">Thema Wohnung</h4>
            </Link>
          </div>
        </div>
      </div>

      <div className="b2-block">
        <div className="b2-block-title display-flex align-items-center justify-content-space-between">
          <div>
            <div className="block-title-medium no-margin block-title text-semibold">
              Top-Themen
            </div>
            <div className="b2-opacity block-title no-margin b2-block-subtitle">
              Am liebsten besucht
            </div>
          </div>
        </div>
        <div className="b2-block-content">
          <div className="blog-list-wrapper">
            <div className="blog-list display-flex align-items-start">
              <div className="blog-list-infos">
                <div className="b2-badge">
                  <Link to="article/10" className="badge cat-schreiben">
                    Schreiben
                  </Link>
                </div>
                <h2 className="margin-bottom-half">
                  <Link to="article/10">
                    Beschwerde über Internationale Begegung.
                  </Link>
                </h2>
              </div>
            </div>

            <div className="blog-list display-flex align-items-start">
              <div className="blog-list-infos">
                <div className="b2-badge">
                  <Link to="article/11" className="badge cat-grammatik">
                    Grammatik
                  </Link>
                </div>
                <h2 className="margin-bottom-half">
                  <Link to="article/11">Partizipien als Adjektive</Link>
                </h2>
              </div>
            </div>

            <div className="blog-list display-flex align-items-start">
              <div className="blog-list-infos">
                <div className="b2-badge">
                  <Link to="article/8" className="badge cat-redemitteln">
                    Redemitteln
                  </Link>
                </div>
                <h2 className="margin-bottom-half">
                  <Link to="article/8">Diskkussion Redemitteln</Link>
                </h2>
              </div>
            </div>
            <div className="blog-list display-flex align-items-start">
              <div className="blog-list-infos">
                <div className="b2-badge">
                  <Link
                    to="article/1"
                    className="badge color-purple cat-wortarten"
                  >
                    Grammatik
                  </Link>
                </div>
                <h2 className="margin-bottom-half">
                  <Link to="article/1">Zweiteilige Konnektoren</Link>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <UbungsListPopular />
    </BasicLayout>
  );
};

export default Home;
