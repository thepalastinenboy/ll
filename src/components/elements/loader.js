import React from "react";
import { BasicLayout } from "../../layouts/basicLayout";
import "./loader.css";

export const Loader = (props) => {
  return (
    <>
      <BasicLayout headerTop={props.withHeader ? true : false}>
        <div className="loader-container">
          <div className="tvdd" role="img">
            <div className="tvdd__ring">
              <div className="tvdd__ring-dots">
                <div className="tvdd__ring-dot" />
                <div className="tvdd__ring-dot" />
                <div className="tvdd__ring-dot" />
                <div className="tvdd__ring-dot" />
                <div className="tvdd__ring-dot" />
                <div className="tvdd__ring-dot" />
                <div className="tvdd__ring-dot" />
                <div className="tvdd__ring-dot" />
                <div className="tvdd__ring-dot" />
                <div className="tvdd__ring-dot" />
                <div className="tvdd__ring-dot" />
                <div className="tvdd__ring-dot" />
              </div>
            </div>
            <div className="tvdd__ring">
              <div className="tvdd__ring-dots">
                <div className="tvdd__ring-dot" />
                <div className="tvdd__ring-dot" />
                <div className="tvdd__ring-dot" />
                <div className="tvdd__ring-dot" />
                <div className="tvdd__ring-dot" />
                <div className="tvdd__ring-dot" />
                <div className="tvdd__ring-dot" />
                <div className="tvdd__ring-dot" />
                <div className="tvdd__ring-dot" />
                <div className="tvdd__ring-dot" />
                <div className="tvdd__ring-dot" />
                <div className="tvdd__ring-dot" />
              </div>
            </div>
            <div className="tvdd__ring">
              <div className="tvdd__ring-dots">
                <div className="tvdd__ring-dot" />
                <div className="tvdd__ring-dot" />
                <div className="tvdd__ring-dot" />
                <div className="tvdd__ring-dot" />
                <div className="tvdd__ring-dot" />
                <div className="tvdd__ring-dot" />
                <div className="tvdd__ring-dot" />
                <div className="tvdd__ring-dot" />
                <div className="tvdd__ring-dot" />
                <div className="tvdd__ring-dot" />
                <div className="tvdd__ring-dot" />
                <div className="tvdd__ring-dot" />
              </div>
            </div>
          </div>
        </div>
      </BasicLayout>
    </>
  );
};
