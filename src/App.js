import React from "react";
import { Helmet } from "react-helmet";
import logo from "./logo.svg";
import Contact from "./components/Contact";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Helmet>
        <meta property="og:site_name" content="mmcoding" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="mmcoding FullStack Developer | Soon!"
        />
        <meta
          property="og:description"
          content="Miguel Machado Portfolio! Under construction - Contact me on Linkedin!"
        />
      </Helmet>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>We're under construction!</p>
        <Contact />
      </header>
    </div>
  );
};

export default App;
