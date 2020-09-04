import React from 'react';
import { Route, NavLink, Switch, useRouteMatch } from "react-router-dom";

import SoustractionToTen from './../Soustraction/SoustractionToTen/SoustractionToTen.js'
import SoustractionToHundred from './../Soustraction/SoustractionToHundred/SoustractionToHundred.js'
import SoustractionToThousand from './../Soustraction/SoustractionToThousand/SoustractionToThousand.js'

import './NavbarSoustraction.css'

function NavbarSoustraction() {
    let { path, url } = useRouteMatch();

    return (

        <div>
            <div className="navbarSousStyle">
                
                <NavLink className="navLinkSoustyle" activeClassName="selectedSous" to={`${url}/soustractiontoten`}>Nombres jusqu'à 10</NavLink>
                <NavLink className="navLinkSoustyle" activeClassName="selectedSous" to={`${url}/soustractiontohundred`}>Nombres jusqu'à 100</NavLink>
                <NavLink className="navLinkSoustyle" activeClassName="selectedSous" to={`${url}/soustractiontothousand`}>Nombres jusqu'à 1 000</NavLink>
            </div>


            <Switch>
                <Route exact path={path}>
                    <h3>Choisissez un type de soustraction</h3>
                </Route>
                <Route path={`${url}/soustractiontoten`}><SoustractionToTen /></Route>
                <Route path={`${url}/soustractiontohundred`}><SoustractionToHundred /></Route>
                <Route path={`${url}/soustractiontothousand`}><SoustractionToThousand /></Route>
            </Switch>
        </div >
    );
}

export default NavbarSoustraction;