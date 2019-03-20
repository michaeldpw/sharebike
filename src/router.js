import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Admin from './admin';
import Buttons from './pages/ui/buttons';
import Modals from './pages/ui/modals';
import Loadings from './pages/ui/loadings';
import Notifications from './pages/ui/notifications';
import Messages from './pages/ui/messages';
import Tab from './pages/ui/tabs';
import NoMatch from './pages/nomatch';
import Home from './pages/home';
import Galleries from './pages/ui/galleries';
import Carousel from './pages/ui/carousel';
import Login from './pages/form/login';
import Register from './pages/form/register';
import BasicTable from './pages/table/basicTable';
import City from './pages/city';
import Order from './pages/order';
import Common from './common';

export default class MyRouter extends React.Component{
    render(){
        return(
        <HashRouter>
            <App>
                <Route path='/login' component={Login} />
                <Route path='/admin' render={() => 
                    <Admin>
                        <Switch>
                            <Route path='/admin/ui/buttons' component={Buttons} />
                            <Route path='/admin/ui/modals' component={Modals} />
                            <Route path='/admin/ui/loadings' component={Loadings} />
                            <Route path='/admin/ui/notifications' component={Notifications} />
                            <Route path='/admin/ui/messages' component={Messages} />
                            <Route path='/admin/ui/tabs' component={Tab} />
                            <Route path='/admin/ui/gallery' component={Galleries} />
                            <Route path='/admin/ui/carousel' component={Carousel} />
                            <Route path='/admin/form/login' component={Login} />
                            <Route path='/admin/form/register' component={Register} />
                            <Route path='/admin/table/basic' component={BasicTable} />
                            <Route path='/admin/city' component={City} />
                            <Route path='/admin/order' component={Order} />
                            <Route path='/admin/home' component={Home}/>
                             <Route component={NoMatch} />
                        </Switch>
                    </Admin>
                } />
                <Route path="/common" render={()=>
                    <Common>
                        <Route path="/common/order/detail/:orderId" component={}/>
                    </Common>
                }/>
            </App>
        </HashRouter>
        )
    }
}