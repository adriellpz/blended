import React, { Component } from 'react'
import Almfileupload from './Almfileupload';
import Devopsfileupload from './Devopsfileupload';

class Body extends Component {
  render() {
    return <div className='body'>
      <Almfileupload />
      <Devopsfileupload />
    </div>
  }
}

export default Body
