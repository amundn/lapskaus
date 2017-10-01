import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import TaxonList from './components/taxon/TaxonList'
import TaxonGallery from './components/taxon/TaxonGallery'
import Kart from './components/kart'
import Statistikk from './components/statistikk'
import FetchContainer from './FetchContainer'
import withRoot from './components/withRoot'

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <FetchContainer>
            <Route path="/" exact component={TaxonList} />
            <Route path="/taxon" exact component={TaxonGallery} />
            <Route path="/taxon/:taxon/" exact component={Statistikk} />
            <Route path="/kart/:taxon" component={Kart} />
          </FetchContainer>
        </BrowserRouter>
      </div>
    )
  }
}

export default withRoot(App)
