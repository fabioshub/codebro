import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Home from '../home'
import About from '../about'

const App = () => (
  <div>
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </Router>
  </div>
)

export default App
