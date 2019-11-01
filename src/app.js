'use strict'

import React, { Component } from 'react'
import AppContent from './components/app-content'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userInfo: null,
      repos: [],
      starred: []
    }
  }

  render () {
    return (
      <AppContent
        userInfo={this.state.unserInfo}
        repos={this.state.repos}
        starred={this.state.starred}
      />
    )
  }
}

export default App

// https://api.github.com/users/jeanbarcellos
