import React, { Component } from 'react';

import NavApp from './Nav';
import Characters from './Characters'

class App extends Component {
  render() {
    return (
      <div>
      <NavApp />
      <Characters />
      </div>
    )
  }
}

export default App;
