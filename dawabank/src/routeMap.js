import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Theatre from './layout/theatre';
import SearchPage from './components/search/searchPage';
import MaintainOffer from './components/offer/maintainOffer';
import MyOffers from './components/myOffers/myOffers';
import Login from './components/user/login';
import LoginCallBack from './security/loginCallBack';

class RouteMap extends React.Component {
 render() {
    return <BrowserRouter >
      <Theatre >

          <Route path="/Login" component={Login} />
          <Route path="/login-call-back"  component={LoginCallBack} />
          <Route path="/Find" component={SearchPage} />
          <Route path="/Offer" component={MaintainOffer} exact={true} />
          <Route path="/Offer/edit/:id" component={MaintainOffer} />
          <Route path="/MyOffers" component={MyOffers} />
      </Theatre>
    </BrowserRouter>;
  }

}

export default RouteMap;
