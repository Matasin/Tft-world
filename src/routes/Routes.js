import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Navbar = lazy(() => import('../components/Navbar/Navbar'));

const Home = lazy(() => import('../pages/Home/Home'));
const Champions = lazy(() => import('../pages/Champions/Champions'));
const ChampionDetail = lazy(() => import('../pages/Champion-Detail/Champion-Detail'));
const Items = lazy(() => import('../pages/Items/Items'));
// const Mods = lazy(() => import('../pages/Mods/Mods'));
const Traits = lazy(() => import('../pages/Traits/Traits'));

const Error404 = lazy(() => import('../components/Error-404/Error-404'));

const Routes = () => (
    <Router>
        <Suspense 
            fallback= {
                <div style={{textAlign: 'center', marginTop: '48vh', fontSize: '2.5em'}}>Loading...</div>
            }
        >
            <Navbar/>
            <Switch>
                <Route path='/' exact component= { Home } />
                <Route path='/champions'exact component= { Champions } />
                <Route path='/champions/:id' component= { ChampionDetail } />
                <Route path='/items' component= { Items } />
                {/* <Route path='/mods' component= { Mods } /> */}
                <Route path='/traits' component= { Traits } />

                <Route path='*' exact={ true } component={ Error404 } />
            </Switch>
        </Suspense>
    </Router>
)

export default Routes;
