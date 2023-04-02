import React, { useState, useEffect } from "react";
import KnowledgeBase from "../components/blog/category";
import Article from "../components/blog/post";
import Home from "../pages/home";
import Search from "../pages/search";
import Wortschatz from "../pages/wortschatz";
import Navigation from "../pages/navigation";
import GermanLanguagePractice from "../components/elements/ubung";
import { useLocation } from "react-router-dom";
import "./app.css";
import AddArticle from "../pages/addarticle";

import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/wortschatz" element={<Wortschatz />} />
          <Route exact path="/navigation" element={<Navigation />} />
          <Route path="/category/:category" element={<KnowledgeBase />} />
          <Route exact path="/article/:id" element={<Article />} />
          <Route path="/ubung/:slug" element={<GermanLanguagePractice />} />
          <Route path="/search" element={<Search />} />
          <Route exact path="add" element={<AddArticle />} />
          <Route path="*" element={<Home />} />    
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
