import React, { useState, useEffect } from "react";
import KnowledgeBase from "../components/blog/category";
import Article from "../components/blog/post";
import Home from "../pages/home";
import Search from "../pages/search";
import {Wortschatz }from "../pages/wortschatz";
import Navigation from "../pages/navigation";
import UbungsList from "../pages/ubungsList";  // Correct path for lower-case "ubungsList.js"

import SavedContent from "../pages/saved";
import WortschatzList from "../pages/wortschatzList";  // Correct path for lower-case "wortschatzList.js"

import GermanLanguagePractice from "../components/elements/ubung";
import {Loader} from "../components";
import { useLocation } from "react-router-dom";
import ContactPage from "../pages/contactme";
import CategoryList  from "../pages/categoryList";
import DrawNotes from "../pages/DrawNotes";
import About from "../pages/about";
import Imprussum from "../pages/imprussum";
import "./app.css";
import AddArticle from "../pages/addarticle";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import InstallPWAButton from './InstallPWAButton';


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const dataFiles = [
  { filename: "Netzwerk [vertifung].json", data: null },
  { filename: "Netzwerk Protokolle.json", data: null },
  { filename: "IT Grundlagen.json", data: null },
  { filename: "sus.json", data: null },
]; 

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

const loadDataFiles = async () => {
  const dataFilePromises = dataFiles.map((file) =>
    import(`../components/wortschatz/${file.filename}`)
  );
  const data = await Promise.all(dataFilePromises);
  return data.map((d, i) => ({
    ...dataFiles[i],
    data: d.default,
    path: replaceUmlauts(
      dataFiles[i].filename.replace(".json", "").replace(/ /g, "-")
    ),
    storageKey: dataFiles[i].filename.replace(".json", ""),
    originalFilename: dataFiles[i].filename.replace(".json", ""),
  }));
};

const App = () => {
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    loadDataFiles().then((data) => {
      setData(data);
      setIsLoadingData(false);
    });
  }, []);

   // Render a loading indicator while the data is being loaded
   if (isLoadingData) {
    return ( 
      <BrowserRouter>
        <Loader withHeader />   
    </BrowserRouter>
    );
  }


  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <InstallPWAButton />
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route
            exact
            path="/wortschatz-liste"
            element={<WortschatzList dataFiles={dataFiles} />}
          />

          {data.map((data, index) => (
            <Route
              key={index}
              path={`/wortschatz/${data.path}`}
              element={
                <Wortschatz
                  data={data.data}
                  storageKey={data.storageKey}
                  originalFilename={data.originalFilename}
                />
              }
            />
          ))}
          <Route exact path="/navigation" element={<Navigation />} />
          <Route exact path="/saved" element={<SavedContent />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/imprussum" element={<Imprussum />} />
          <Route exact path="/zeichnen" element={<DrawNotes />} />
          <Route path="/category/:id" element={<KnowledgeBase />} />
          <Route path="/Kategorie-Liste" element={<CategoryList />} />
          <Route path="/sub-subject/:slug" element={<Article />} />
          <Route path="/ubung/:id" element={<GermanLanguagePractice />} />
          <Route path="/uebungen" element={<UbungsList />} />
          <Route path="/search" element={<Search />} />
          <Route exact path="/Kontakt" element={<ContactPage />} />
          <Route exact path="/addd" element={<AddArticle />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};


export default App;
