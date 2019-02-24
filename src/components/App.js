import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import NavApp from './Nav';
import Characters from './Characters';
import CharacterDetail from './characterDetails';

class App extends Component {
  render() {
    return (
    <BrowserRouter basename = { process.env.PUBLIC_URL } >
      <div>
      <NavApp />
      <Route exact path = '/' component = { Characters } />
      <Route exact path = '/character/:id' component = { CharacterDetail } />
      </div>
    </BrowserRouter>
    )
  }
}

export default App;
