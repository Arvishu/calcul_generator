import React from 'react';
import { Route, NavLink, Switch, useRouteMatch } from 'react-router-dom';

import DivisionTable from './../Division/DivisionTable/DivisionTable.js';

import './NavbarDivision.css'

function NavbarDivision() {
    let { path, url } = useRouteMatch();

    return (
        <div>
            <div className="navbarDivStyle">
                <NavLink className="navLinkDivStyle" activeClassName="selectedDiv" to={`${url}/DivisionTable`}>Tables de Division</NavLink>

            </div>

<Switch>
    <Route exact path ={path}>
       <DivisionTable/>
    </Route>
    <Route path={`${url}/divisiontable`}><DivisionTable/></Route>

</Switch>

        </div>
    )
}
export default NavbarDivision;