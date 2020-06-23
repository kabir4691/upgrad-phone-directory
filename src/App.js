import React from 'react';
import Header from './Header';
import './App.css'

function App() {
  const subscribers = [
    { 
      id: 1,
      name: 'Kabir',
      mobile: 9876543210
    },
    { 
      id: 2,
      name: 'Nazir',
      mobile: 9012345678
    }
  ]
  return (
    <div>
      <Header />
      <div className="content-container">
        <button className="button button-add">ADD</button>
        <div className="heading-container">
          <span className="heading-item">NAME</span>
          <span className="heading-item">PHONE</span>
        </div>
        {subscribers.map(item => {
          return (
            <div className="row-container" key={item.id}>
              <span className="row-item">{item.name}</span>
              <span className="row-item">{item.mobile}</span>
              <button className="button button-delete">DELETE</button>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
