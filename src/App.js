import React, { Component } from 'react'
import Body from './components/Body'
import Header from './components/Header'
import Bottom from './components/Bottom'
import './style.css'

class App extends Component {
  render() {
    return <div className='container'>
        <Header />
        <Body />
        <Bottom />
    </div>
  }
}

export default App
