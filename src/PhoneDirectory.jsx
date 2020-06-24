import React from 'react'
import AddSubscriber from './AddSubscriber'
import ShowSubscribers from './ShowSubscribers'

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
    this.setState({ subscriberList: subscriberList});
  }

  render() {
    return (
      <ShowSubscribers subscriberList={this.state.subscriberList}/>
    )
  }
}