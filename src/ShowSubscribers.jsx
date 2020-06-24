import React from 'react';
import Header from './Header';
import './ShowSubscribers.css'

export default class extends React.Component {
 
  render() {
    return (
      <div>
        <Header heading="PHONE DIRECTORY"/>
        <div className="content-container">
          <button className="button button-add">ADD</button>
          <div className="heading-container">
            <span className="heading-item">NAME</span>
            <span className="heading-item">PHONE</span>
          </div>
          {this.props.subscriberList.map(item => {
            return (
              <div className="row-container" key={item.id}>
                <span className="row-item">{item.name}</span>
                <span className="row-item">{item.phone}</span>
                <button className="button button-delete">DELETE</button>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}
