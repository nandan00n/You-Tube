import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import EditPolicy from '../edit/EditPolicy';
// import Navbar from '../navbar/Navbar';
import Chart from '../chart/Chart';
import Home from '../home/Home';

const Routing = () => {
  return (
    <Router>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/chart' component={Chart} />
        </Switch>
    </Router>
  )
}

export default Routing;