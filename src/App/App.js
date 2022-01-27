import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import Nav from "../Nav/Nav";
import Home from "../Home/Home";
import About from "../About/About";
import { MAILCHIMP_SITE } from "../externalLinks";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Nav />
      <header>
        <h1 className="name">Jonathan Rubin</h1>
        <h2>
          Senior Software Engineer @{" "}
          <a
            className="undecorated-link "
            href={MAILCHIMP_SITE}
            target="_blank"
          >
            Mailchimp
          </a>{" "}
        </h2>
      </header>
      <Routes>
        <Route path="about" element={<About />} />
        {/* <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
            </main>
          }
        /> */}
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};
export default App;
