import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Blooprint from './Blooprint'
import Restaurant from './Restaurant'
import Menus from '../components/Blooprint/Menus'

export default class App extends Component {
  render() {
    return (
        <div className='App'>
            <Switch>
                <Route exact path="/" component={Blooprint}/>
                <Route exact path="/listing" component={Menus}/>
                <Route path="/listing/:restaurant" component={Restaurant}/>
                <Route path="/listing/:restaurant/menu" component={Restaurant}/>
            </Switch>
        </div>
    );
  }
}
