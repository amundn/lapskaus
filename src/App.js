import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Artshjul from './components/artshjul/Artshjul'
import Kart from './components/kart'
import Statistikk from './components/statistikk'
import FetchContainer from './FetchContainer'
import MuiTheme from 'material-ui/styles/MuiThemeProvider'
class App extends Component {
  render() {
    return (
      <MuiTheme>
      <BrowserRouter>
        <FetchContainer>
            <Route path="/" exact component={Artshjul} />
            <Route path="/:taxon/" exact component={Statistikk} />
            <Route path="/:taxon/kart" component={Kart} />
        </FetchContainer>
      </BrowserRouter>
      </MuiTheme>
    )
  }
}

export default App
