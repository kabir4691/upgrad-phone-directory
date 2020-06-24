import React from 'react';
import Header from './Header';
import './App.css'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subscriberList: []
    }
  }

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
          {this.state.subscriberList.map(item => {
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

  componentDidMount() {
    this.setState({
      subscriberList: this.state.subscriberList.concat(
        [
          { 
            id: 1,
            name: 'Kabir',
            mobile: 9876543210
          },
          { 
            id: 2,
            name: 'Nazir',
            mobile: 9012345678
          },
        ]
      )
    })
  }
}
