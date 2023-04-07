import React from "react";
import { Link } from "react-router-dom";
import practicesData from "../data/ubungs.json";
import { BasicLayout } from "../layouts/basicLayout";
import { BackButton } from "../components/header/backbutton";
import { HeaderTop } from "../components";

const UbungsList = () => {
  // Extract the practices array from the object
  const { practices } = practicesData;

  return (
    <BasicLayout>
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
          <div className="list-saved">
            {practices.map((practice) => (
              <div
                key={practice.id}
                className="display-flex align-items-center justify-content-space-between"
              >
                <div className="list-item-seved display-flex align-items-center">
                  <div className="post-author display-flex align-items-center">
                    <div className="post-author-infos margin-left-half">
                      <span className="post-author-name display-block text-semibold">
                        <Link to={`/ubung/${practice.slug}`}>
                          {practice.name}
                        </Link>
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
        </div>
      </div>
    </BasicLayout>
  );
};

export default UbungsList;
