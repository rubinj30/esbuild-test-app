import React from "react";

export default function Home() {
  return (
    <p className="description">
      I created this app to familiarize myself with the{" "}
      <a
        className="undecorated-link"
        href="https://esbuild.github.io/"
        target="_blank"
      >
        <strong>esbuild</strong>
      </a>{" "}
      API. I will eventually add more details about myself and turn this into a
      portfolio, along with finish setting up the theme-switcher.
    </p>
  );
}
