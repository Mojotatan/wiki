import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

// import containers

render(
  (
    <Router>
      <div className="app">
        <main>
          <Route path="/" component={} />
        </main>
      </div>
    </Router>
  ), document.getElementById('app')
)