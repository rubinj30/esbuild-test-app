import React from 'react';
import Nav from '../Nav/Nav';
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <Nav />
      <header>
        <h1>Jonathan Rubin</h1>
      </header>
      <main>
        <h2>Senior Software Engineer @ Mailchimp</h2>
        <p>I created this app to familiarize myself with the <a className='esbuild-link' href="https://esbuild.github.io/" target="_blank"><strong>esbuild</strong></a> API. I will eventually add more details about myself and turn this into a portfolio, along with finish setting up the CSS-based theme-switcher</p>
      </main>
    </div>
  );
}
export default App;