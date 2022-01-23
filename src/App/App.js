import React from "react";
import Nav from "../Nav/Nav";
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
          <a className="undecorated-link " href={MAILCHIMP_SITE} target="_blank">
            Mailchimp
          </a>{" "}
        </h2>
      </header>
      <main>
        <p className="description">
          I created this app to familiarize myself with the{" "}
          <a
            className="undecorated-link"
            href="https://esbuild.github.io/"
            target="_blank"
          >
            <strong>esbuild</strong>
          </a>{" "}
          API. I will eventually add more details about myself and turn this
          into a portfolio, along with finish setting up the
          theme-switcher.
        </p>
      </main>
    </div>
  );
};
export default App;
