import React , {useState, useEffect} from "react";
import { BasicLayout } from "../../layouts/basicLayout";
import PreloaderContent from "./preloader-content";
import { Link } from "react-router-dom";
const UbungsListPopular = () => {
  const [practices, setPractices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://www.b2lernen.de/api/ubungs-api.php")
      .then((response) => response.json())
      .then((data) => {
        setPractices(data.practices.slice(0, 6)); // slice the first 6 items
        setIsLoading(false);
      })
      .catch((error) => console.error("Error fetching practices:", error));
  }, []);

  return (
    <>

<div className="b2-block">
<div className="b2-block-title display-flex align-items-center justify-content-space-between">
          <div>
            <div className="block-title-medium no-margin block-title text-semibold">
              Übungen
            </div>
          </div>
          <div className="b2-badge">
            <Link
              to="/uebungen"
              className="badge bg-color-faqehgreen text-color-black"
            >
              Alle
            </Link>
          </div>
        </div>
          <div className="b2-block-content">
      {isLoading ? (
        <PreloaderContent />
      ) : (

        <div className="list-saved">
          {practices.map((practice) => (
            <div
              key={practice.id}
              className="display-flex align-items-center justify-content-space-between no-border"
            >
              <div className="list-item-seved display-flex align-items-center">
                <div className="post-author display-flex align-items-center">
                  <div className="post-author-infos margin-left-half">
                    <span className="post-author-name display-block text-semibold">
                      <Link to={`/ubung/${practice.slug}`}>{practice.name}</Link>
                    </span>
                  </div>
                </div>

                <div className="b2-badge">
                  <Link
                    to={`/ubung/${practice.slug}`}
                    className="badge color-yellow text-color-black p-10"
                  >
                    starten
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      </div></div>
    </>
  );
};

export default UbungsListPopular;
