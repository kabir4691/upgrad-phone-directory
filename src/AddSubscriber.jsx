import React from 'react';
import Header from './Header'
import './AddSubscriber.css'

export default class extends React.Component {
  render() {
    return (
      <div>
        <Header heading='Add Subscriber'/>
        <div className='content-container'>
          <button className='button'>Back</button>
          <form className='subscriber-form'>
            <label htmlFor='name' className='label-control'>Name: </label>
            <br />
            <input name='name' type='text' placeholder='Name' className='input-control'/>
            <br />
            <label htmlFor='phone' className='label-control'>Phone: </label>
            <br />
            <input name='phone' type='text' placeholder='Phone' className='input-control'/>
            <br />
            <div className='subscriber-info-container'>
              <span className='subscriber-to-add-heading'>Subscriber to be added</span>
              <br />
              <span className='subscriber-info'>Name: </span>
              <br />
              <span className='subscriber-info'>Phone: </span>
            </div>
            <button className='button button-add'>Add</button>
          </form>
        </div>
        
      </div>
    )
  }
}