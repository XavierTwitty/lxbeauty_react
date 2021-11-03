import React from "react"

import {Route, Link , Switch } from "react-router-dom"

import Home from "./home"
import About from "./about"
import Contact from "./contact"
import Menu from "./menu"  

function App () {

return (
<div className="App">

    <nav>
    
            <Link to="/"> Home </Link>
            <Link to="/menu"> Menu </Link>
            <Link to="/about"> About </Link>
            <Link to="/contact"> Contact </Link>

    </nav>

<Switch>
    <Route exact path="/">
        <Home/>
    </Route>

    <Route path="/menu">
        <Menu/>
    </Route>

    <Route path="/about">
        <About/>
    </Route>

    <Route path="/contact">
        <Contact/>
    </Route>
</Switch>                                                                                                                                                                                                                                                                               
</div>
)
}


export default App   