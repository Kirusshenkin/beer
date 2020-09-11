import React, { Component } from 'react'
import {NavLink, BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Presentation from '../../../container/Presentation/Presentation'
import Home from '../../../container/Home/Home'
import Favorite from '../../../container/Favorite/Favorite'
import Container from '@material-ui/core/Container'
import Grid from "@material-ui/core/Grid";
import "./Header.css"

class Header extends Component {
    render() {
        return (
            <Router>
                <div className="Header">
                    <Container>
                        <Grid container style={{'padding': 10}}>
                            <Grid item xs={10}>
                                <NavLink to="/Presentation" className="headerLinks">
                                    BLB
                                </NavLink>
                            </Grid>
                            <Grid item xs={1}>
                                <NavLink to="/Home" className="headerLinks">
                                    Home
                                </NavLink>
                            </Grid>
                            <Grid item xs={1}>
                                <NavLink to="/Favorite" className="headerLinks">
                                    Favorites
                                </NavLink>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
                <Switch>
                    <Route exact path="/Presentation">
                        <Presentation/>
                    </Route>
                    <Route path="/Home">
                        <Home/>
                    </Route>
                    <Route path="/Favorite">
                        <Favorite/>
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default Header