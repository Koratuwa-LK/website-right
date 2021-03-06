import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Landing from './components/landing/landing';
import Store from './components/store/store';
import Checkout from './components/checkout/checkout';
import Request from './components/request/request';
import Pool from './components/pool/pool';
import Farmer from './components/farmer';
import { AuthProvider } from './Auth';
import PrivateRoute from "./PrivateRoute";
import login from './login';
import signUp from './signUp';
import Poolanalysis from './components/pool/poolanalysis';
import Croplocations from './components/croplocations/croplocations';
import Cropsfiller from './components/croplocations/cropsfiller';
import FarmerReview from './components/reviewModule/farmerReview';
import OrderHistory from './components/Order/orderHistory';
import Requestnew from './components/request/requestnew';

function App() {
  return(
  <AuthProvider>
    <Router>
    <div>
      <Switch>
          <Route exact path='/' component={Landing} />
          <Route path="/login" component={login} />
          <Route exact path="/signup" component={signUp} />
          <Route exact path='/store' component={Store} />
          <PrivateRoute exact path='/checkout' component={Checkout} />
          {/* <PrivateRoute exact path='/request' component={Request} /> */}
          <PrivateRoute exact path='/request' component={Requestnew} />
          <PrivateRoute exact path='/pool' component={Pool} />
          <Route exact path='/comparison' component={Poolanalysis} />
          <Route exact path='/croplocations' component={Croplocations} />
          <Route exact path='/cropsfill' component={Cropsfiller} />
          <Route exact path='/farmer/:uid' component={FarmerReview} />
          <Route exact path='/orders/' component={OrderHistory} />
      </Switch>
    </div>
  </Router>
  </AuthProvider>
  );
}

export default App;
