import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Artshjul from './components/artshjul/Artshjul'
import Artstre from './components/artstre/Artstre'
import Kart from './components/kart'
import Statistikk from './components/statistikk'
import FetchContainer from './FetchContainer'
import withRoot from './components/withRoot'
import PropTypes from 'prop-types'

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <FetchContainer>
            <Route path="/" exact component={Artshjul} />
            <Route path="/art" exact component={Artstre} />
            <Route path="/art/:taxon/" exact component={Statistikk} />
            <Route path="/:taxon/kart" component={Kart} />
          </FetchContainer>
        </BrowserRouter>
      </div>
    )
  }
}
App.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withRoot(App)
