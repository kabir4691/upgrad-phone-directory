import React from 'react';
import Header from './Header';
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <div className="content-container">
        <button className="button button-add">ADD</button>
        <div className="heading-container">
          <span className="heading-item">NAME</span>
          <span className="heading-item">PHONE</span>
        </div>
      </div>
    </div>
  );
}

export default App;
