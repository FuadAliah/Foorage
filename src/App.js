import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './components/HomeIndex/HomeIndex'
import NavBar from './components/NavBar/NavBar'
import ToTop from './components/ToTop/ToTop'
import listing from './components/listing/listing'

function App() {

  return (
    <div className="app">
      <AnimatePresence>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/listing" component={listing} />
          </Switch>
          <ToTop />
        </BrowserRouter>
      </AnimatePresence>
    </div>
  )
}

export default App;