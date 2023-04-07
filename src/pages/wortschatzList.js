import React from "react";
import { Link } from "react-router-dom";
import { HeaderTop } from "../components";
import { BasicLayout } from "../layouts/basicLayout";

import Masonry from "react-masonry-css";

const WortschatzList = ({ dataFiles }) => {
  const breakpoints = {
    default: 4,
    1024: 3,
    768: 3,
    600: 2,
    576: 2,
    360: 2,
    320: 1,
  };

  const replaceUmlauts = (str) => {
    return str
      .replace(/ä/g, "ae")
      .replace(/ö/g, "oe")
      .replace(/ü/g, "ue")
      .replace(/Ä/g, "Ae")
      .replace(/Ö/g, "Oe")
      .replace(/Ü/g, "Ue")
      .replace(/ß/g, "ss");
  };

  return (
    <BasicLayout>
      <HeaderTop />
      <div className="b2-block">
        <div className="b2-block-title display-flex align-items-center justify-content-space-between">
          <div>
            <div className="block-title-medium no-margin block-title text-semibold">
              Wortschatz und Vokabeln
            </div>
            <div className="b2-opacity block-title no-margin b2-block-subtitle">
              Alles was du im B2 merken musst.
            </div>
          </div>
        </div>
        <div className="b2-block-content">
          <Masonry
            breakpointCols={breakpoints}
            className="masonry-grid"
            columnClassName="masonry-grid_column"
          >
            {dataFiles.map((file, index) => {
              const formattedFilename = replaceUmlauts(
                file.filename.replace(".json", "").replace(/ /g, "-")
              );

              return (
                <div key={index} className="wortschatz-item">
                  <Link to={`/wortschatz/${formattedFilename}`}>
                    {file.filename.replace(".json", "").toUpperCase()}
                  </Link>
                </div>
              );
            })}
          </Masonry>
        </div>
      </div>
    </BasicLayout>
  );
};

export default WortschatzList;
