import React from "react"

import {Route, Link , Switch } from "react-router-dom"

import Home from "./home"
import About from "./about"
import Contact from "./contact"
import Menu from "./menu"  

function App () {

return (
<div classname="App">
    <h1>hello world</h1>

    <ul>
        <li>
            <Link to="/"> Home </Link>
        </li>
        <li>
            <Link to="/menu"> Menu </Link>
        </li>
        <li>
            <Link to="/about"> About </Link>
        </li>
        <li>
            <Link to="/contact"> Contact </Link>
        </li>
    </ul>
<Switch>
    <Route path="/">
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