import React, { useState, useEffect } from "react";
import { BasicLayout } from "../layouts/basicLayout";
import { HeaderTop } from "../components";
import PreloaderContent from "../components/elements/preloader-content";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const UbungsList = () => {
  const [practices, setPractices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch practices from the new API endpoint
    fetch("https://wh467262.ispot.cc/note-website-backend/api/practices/practices/")
      .then((response) => response.json())
      .then((data) => {
        setPractices(data); // Set the fetched data directly (no nested "practices" key)
        setIsLoading(false);
      })
      .catch((error) => console.error("Error fetching practices:", error));
  }, []);

  return (
    <BasicLayout>
      <Helmet>
        <title>{`Übungen Liste - B2 Lernen`}</title>
        <meta name="keywords" content="deutsch b2 lernen" />
      </Helmet>
      <HeaderTop />
      <div className="b2-block no-border">
        <div className="b2-block-title display-flex align-items-center justify-content-space-between">
          <div className="block-title-medium no-margin block-title text-semibold">
            Übungen Liste
          </div>
        </div>
      </div>

      <div className="b2-block">
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
                          {/* Use `id` instead of `slug` for routing */}
                          <Link to={`/ubung/${practice.id}`}>
                            {practice.title} {/* Updated field name from `name` to `title` */}
                          </Link>
                        </span>
                      </div>
                    </div>

                    <div className="b2-badge">
                      {/* Use `id` instead of `slug` for routing */}
                      <Link
                        to={`/ubung/${practice.id}`}
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
        </div>
      </div>
    </BasicLayout>
  );
};

export default UbungsList;