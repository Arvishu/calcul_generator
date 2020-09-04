import React from 'react';
import {Route, NavLink, Switch,useRouteMatch} from "react-router-dom";

import MultiplicationTable from'./../Multiplication/MultiplicationTable/MultiplicationTable.js';
import MultiplicationToTen from '../Multiplication/MultiplicationToTen/MultiplicationToTen.js';

import './NavbarMultiplication.css'

function NavbarMultiplication() {
    let { path, url } = useRouteMatch();

    return (
        <div>

            <div className="navbarMultiStyle" >
                
                <NavLink className='navLinkMultiStyle' activeClassName="selectedMulti" to={`${url}/multiplicationtable`}>Tables de Multiplication</NavLink>

                <NavLink className='navLinkMultiStyle' activeClassName="selectedMulti" to={`${url}/multiplicationtoten`}>Multiplication de Nombres jusqu'à 10</NavLink>



            </div>

            <Switch>
                <Route exact path={path}>
                    <h3>Choisissez une table de multiplication</h3>
                </Route>
                <Route path={`${url}/multiplicationtable`}><MultiplicationTable /></Route>
                <Route path={`${url}/multiplicationtoten`}><MultiplicationToTen /></Route>



            </Switch>
        </div>
    )
}

export default NavbarMultiplication;