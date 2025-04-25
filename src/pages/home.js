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
        <title>{`Umschulung: Alles, was ich für die Umschulung benötigen - Note Website`}</title>
        <meta name="keywords" content="Umschulung" />
      </Helmet>
      <ThemenSwiper />
      <div className="b2-block">
        <div className="b2-block-title display-flex align-items-center justify-content-space-between">
          <div>
            <div className="block-title-medium no-margin block-title text-semibold">
              Wortschatz
            </div>
            <div className="b2-opacity block-title no-margin b2-block-subtitle">
              Alles was ich merken muss.
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
              to="/wortschatz/Netzwerk-[vertifung]"
              className="cardw card--style-icon card--style-round-corners"
            >
              <h4 className="card__title">Netzwerk [vertifung]</h4>
            </Link>
            <Link
              to="/wortschatz/sus"
              className="cardw card--style-icon card--style-round-corners"
            >
              <h4 className="card__title">Service und Support</h4>
            </Link>
            <Link
              to="/wortschatz/Netzwerk-Protokolle"
              className="cardw card--style-icon card--style-round-corners"
            >
              <h4 className="card__title">Netzwerk Protokolle</h4>
            </Link>
            <Link
              to="/wortschatz/IT-Grundlagen"
              className="cardw card--style-icon card--style-round-corners"
            >
              <h4 className="card__title">IT Grundlagen</h4>
            </Link>
          </div>
        </div>
      </div>
      <UbungsListPopular />

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
            {/* <div className="blog-list display-flex align-items-start">
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
              
            </div> */}
             <div id="preloader-container">
  <div id="preloader-content">
    <div id="preloader-title" className="preloader-shimmer" />
    <div id="preloader-desc">
      <div className="preloader-line preloader-shimmer" />
      <div className="preloader-line preloader-shimmer" />
      <div className="preloader-line preloader-shimmer" />
      <div className="preloader-line preloader-shimmer" />
    </div>
  </div>
</div>
          </div>
        </div>
      </div>

      
    </BasicLayout>
  );
};

export default Home;
