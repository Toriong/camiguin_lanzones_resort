import React from 'react'
import NavBar from './NavBar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import Reservation from './reservation'
import PhotoGallery from './photoGallery'
import Contact from './contact'
import Policy from './policy'
import Rooms from './Rooms'








const index = () => {
    return (
        <>
            <Router>
                <NavBar />
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route exact path="/about">
                        <AboutPage />
                    </Route>
                    <Route exact path="/rooms">
                        <Rooms />
                    </Route>
                    <Route exact path="/reservation">
                        <Reservation />
                    </Route>
                    <Route exact path="/gallery">
                        <PhotoGallery />
                    </Route>
                    <Route exact path="/contact">
                        <Contact />
                    </Route>
                    <Route exact path='/policy'>
                        <Policy />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default index
