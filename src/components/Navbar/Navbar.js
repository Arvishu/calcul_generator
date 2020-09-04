import React from 'react';
import { Route, NavLink, Switch } from "react-router-dom";
import './Navbar.css';
import logo from './../../ressources/panneau_anim.gif';



import Home from './../Home/Home.js';

import NavbarAddition from './../NavbarAddition/NavbarAddition.js';
import NavbarSoustraction from './../NavbarSoustraction/NavbarSoustraction.js';
import NavbarMultiplication from './../NavbarMultiplication/NavbarMultiplication.js';
import NavbarDivision from './../NavbarDivision/NavbarDivision.js';
import AudioPlayer from './../AudioPlayer/AudioPlayer.js';

export default function Navbar() {
    return (
        <>
            
            <div className='navbarStyle'>
            <NavLink className="home" to='/home'><img src={logo} alt="logo" /></NavLink>

<div></div>
                <NavLink className='navLinkStyle' activeClassName="selected" to='/addition'>Addition</NavLink>
                <NavLink className='navLinkStyle' activeClassName="selected" to='/soustraction'>Soustraction</NavLink>
                <NavLink className='navLinkStyle' activeClassName="selected" to='/multiplication'>Multiplication</NavLink>
                <NavLink className='navLinkStyle' activeClassName="selected" to='/division'>Division</NavLink>
                <AudioPlayer className='navbarStyle' />
            </div>

            <Switch>
                <Route exact path="/home" ><Home /></Route>
                <Route path="/addition" ><NavbarAddition /></Route>
                <Route path="/soustraction" ><NavbarSoustraction /></Route>
                <Route path="/multiplication" ><NavbarMultiplication /></Route>
                <Route path="/division" ><NavbarDivision /></Route>
            </Switch>
        </>
    );
}





