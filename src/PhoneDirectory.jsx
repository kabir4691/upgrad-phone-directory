import React from 'react'
import AddSubscriber from './AddSubscriber'
import ShowSubscribers from './ShowSubscribers'
import { BrowserRouter as Router, Route } from 'react-router-dom'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      subscriberList: [
        {
          id: 1,
          name: 'Kabir',
          phone: 9876543210
        }
      ]
    }
  }

  addSubscriberHandler = (subscriber) => {
    const subscriberList = this.state.subscriberList;
    subscriber.id = subscriberList.length ? subscriberList[subscriberList.length - 1].id + 1 : 1;
    subscriberList.push(subscriber);
    this.setState({subscriberList});
  }

  deleteSubscriberHandler = (subscriberId) => {
    let subscriberList = this.state.subscriberList;
    subscriberList = subscriberList.filter(item => item.id !== subscriberId);
    this.setState({subscriberList});
  }

  render() {
    return (
      <Router>
        <Route exact path='/' render={props => <ShowSubscribers {...props} subscriberList={this.state.subscriberList} deleteSubscriberHandler={this.deleteSubscriberHandler}/> } />
        <Route exact path='/addSubscriber' render={({history}, props) => <AddSubscriber history={history} {...props} addSubscriberHandler={this.addSubscriberHandler} /> } />
      </Router>
    )
  }
}