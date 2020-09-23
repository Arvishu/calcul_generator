import React from 'react';
import {
    Route, NavLink, Switch,
    useRouteMatch
} from "react-router-dom";
import AdditionToTen from './../Addition/AdditionToTen/AdditionToTen.js';
import AdditionToHundred from './../Addition/AdditionToHundred/AdditionToHundred.js'
import AdditionToThousand from './../Addition/AdditionToThousand/AdditionToThousand.js'

import './NavbarAddition.css';


function NavbarAddition() {
    let { path, url } = useRouteMatch();

    return (
        <div >


            <div className="navbarAddStyle" >

                <NavLink className='navLinkAddStyle' activeClassName="selectedAdd" to={`${url}/additiontoten`}> Nombres jusqu'à 10</NavLink>

                <NavLink className='navLinkAddStyle' activeClassName="selectedAdd"to={`${url}/additiontohundred`}> Nombres jusqu'à 100</NavLink>

                <NavLink className='navLinkAddStyle' activeClassName="selectedAdd"to={`${url}/additiontothousand`}> Nombres jusqu'à 1000</NavLink>

            </div>

            <Switch>
                <Route exact path={path}>
                    <h3 className="navbarAddTitle">Choisissez un type d'addition</h3>
                </Route>
                <Route path={`${url}/additiontoten`}><AdditionToTen/></Route>

                <Route path={`${url}/additiontohundred`}><AdditionToHundred/></Route>

                <Route path={`${url}/additiontothousand`}><AdditionToThousand/></Route>

            </Switch>

        </div>
    );
}
export default NavbarAddition