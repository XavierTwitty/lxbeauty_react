import React from "react"

import {Route, Link , Switch } from "react-router-dom"

const App = () => {
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
                                                                                                                                                                                                                                                                                  
</div>
)
}


export default App   