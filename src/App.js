import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Artshjul from './components/artshjul'
import Kart from './components/kart'
import Statistikk from './components/statistikk'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Artshjul} />
          <Route path="/:taxon/" exact component={Statistikk} />
          <Route path="/:taxon/kart" component={Kart} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
