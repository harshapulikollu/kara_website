import React from 'react';
import TextLoop from "react-text-loop";
import './App.css';

function PageNotFound() {
  return (
    <div className="Background">
      <header>
       <h1 style={{color:'white'}}>404</h1>
       <h1>NOT FOUND</h1>
       <a href='/'>Home</a>
      </header>
    </div>
  );
}

export default PageNotFound;
