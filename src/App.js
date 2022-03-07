import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Login } from './components/Login';
import { HomeProducts } from './components/Home_products';
import { AccountProducts } from './components/Account_products';

import { Checkout } from "./components/Checkout";
import { PersonalDetail } from "./components/PersonalDetail";
import { CardDetail } from "./components/CardDetail";
import { CheckoutThanks } from "./components/CheckoutThank";

import { Thanks } from "./components/thanks";
import { Basket } from './components/Basket'
import { ProductDescription } from './components/Product_Description'

import { Product } from './components/Product'

function App() {

  

  
    
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomeProducts />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/account">
            <AccountProducts />
          </Route>

          
          <Route exact path="/productdetail">
            <Product />
          </Route>

          <Route exact path="/product" >
            <ProductDescription />
          </Route>


          <Route exact path="/account/thanks">
            <Thanks />
          </Route>

          <Route exact path="/basket">
            <Basket />
          </Route>

          <Route exact path="/checkout">
            <Checkout />
          </Route>

          
          <Route exact path="/personalDetail">
            <PersonalDetail />
          </Route>

          
          <Route exact path="/cardDetail">
            <CardDetail />
          </Route>

          
          <Route exact path="/checkoutThank">
            <CheckoutThanks />
          </Route>

          


        </Switch>
        <Footer />
      </Router>
    </>




  );
}

export default App;
