import React , { useState }from "react"
import {Route, Link , Switch } from "react-router-dom"

import Home from "./home"
import About from "./about"
import Contact from "./contact"
import Menu from "./menu"  

function App () {

return (
<div className="App">

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