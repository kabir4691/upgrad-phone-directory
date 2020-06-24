import React from 'react';
import Header from './Header';
import './ShowSubscribers.css'
import { Link } from 'react-router-dom';

export default class extends React.Component {

  onDeleteClick = (subscriberId) => {
    this.props.deleteSubscriberHandler(subscriberId);
  }
 
  render() {
    return (
      <div>
        <Header heading="PHONE DIRECTORY"/>
        <div className="content-container">
          <Link to='/addSubscriber'>
            <button className="button button-add">ADD</button>
          </Link>
          <div className="heading-container">
            <span className="heading-item">NAME</span>
            <span className="heading-item">PHONE</span>
          </div>
          {this.props.subscriberList.map(item => {
            return (
              <div className="row-container" key={item.id}>
                <span className="row-item">{item.name}</span>
                <span className="row-item">{item.phone}</span>
                <button className="button button-delete" onClick={this.onDeleteClick.bind(this, item.id)}>DELETE</button>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}
