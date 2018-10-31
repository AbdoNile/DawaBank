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

          <Route path="/login" component={Login} />
          <Route path="/login-call-back/:return_url?"  component={LoginCallBack} />
          <Route path="/search" component={SearchPage} />
          <Route path="/create-offer" component={MaintainOffer} exact={true} />
          <Route path="/edit-offer/:id" component={MaintainOffer} />
          <Route path="/my-offers" component={MyOffers} />
      </Theatre>
    </BrowserRouter>;
  }

}

export default RouteMap;
