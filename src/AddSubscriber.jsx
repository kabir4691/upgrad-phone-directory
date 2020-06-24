import React from 'react';
import Header from './Header'
import './AddSubscriber.css'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      name: '',
      phone: ''
    }
  }

  inputChangedHandler = (e) => {
    this.state[e.target.name] = e.target.value;
    this.setState(this.state);
  }

  onFormSubmitted = (e) => {
    e.preventDefault();
    this.props.addSubscriberHandler(this.state);
    this.setState({ id: 0, name: '', phone: ''});
  }

  render() {
    return (
      <div>
        <Header heading='Add Subscriber'/>
        <div className='content-container'>
          <button className='button'>Back</button>
          <form className='subscriber-form' onSubmit={this.onFormSubmitted}>
            <label htmlFor='name' className='label-control'>Name: </label>
            <br />
            <input name='name' type='text' placeholder='Name' className='input-control' onChange={this.inputChangedHandler} value={this.state.name}/>
            <br />
            <label htmlFor='phone' className='label-control'>Phone: </label>
            <br />
            <input name='phone' type='text' placeholder='Phone' className='input-control' onChange={this.inputChangedHandler} value={this.state.phone}/>
            <br />
            <div className='subscriber-info-container'>
              <span className='subscriber-to-add-heading'>Subscriber to be added</span>
              <br />
              <span className='subscriber-info'>Name: {this.state.name}</span>
              <br />
              <span className='subscriber-info'>Phone: {this.state.phone}</span>
            </div>
            <button className='button button-add'>Add</button>
          </form>
        </div>
        
      </div>
    )
  }
}