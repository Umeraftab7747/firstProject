import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./components/pages/login/Login"
import Signup from "./components/pages/signup/Signup"
import Reset from "./components/pages/reset/Reset"
import Dashboard from "./components/pages/dashboard/Dashboard"
import WalletBack from "./components/pages/wallet/WalletBack"
import Details from "./components/pages/details/DetailBack"
import Order from "./components/pages/order/Order"
import PupUp from "./components/pages/dashBoardPopUp/PupUp"
import Refund from "./components/pages/refund/Refund"
import Payment from "./components/pages/payment/Payment"
import Settind from "./components/pages/setting/Settind"
import After from "./components/pages/after/After"
import Chat from "./components/pages/chat/Chat"

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/reset" component={Reset} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/walletback" component={WalletBack} />
          <Route exact path="/detailback" component={Details} />
          <Route exact path="/order" component={Order} />
          <Route exact path="/pupup" component={PupUp} />
          <Route exact path="/refund" component={Refund} />
          <Route exact path="/payment" component={Payment} />
          <Route exact path="/settind" component={Settind} /> 
          <Route exact path="/after" component={After} />
          <Route exact path="/chat" component={Chat} />
        </Switch>
      </Router>
    </>
  )
}

export default App