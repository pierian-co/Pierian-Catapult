import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Login } from './components/Login';
import { HomeProducts } from './components/Home_products';
import { AccountProducts } from './components/Account_products';

import { CaribbeanProduct } from "./components/caribbeanProduct";
import { GermanProduct } from "./components/germanProduct";
import { IndianProduct } from "./components/indianProduct";
import { JapaneseProduct } from "./components/japaneseProduct";
import { KoreanProduct } from "./components/koreanProduct";
import { VietnamProduct } from "./components/vietnamProduct";

import { Thanks } from "./components/thanks";

import { ProductDescription } from './components/Product_Description'

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

          
          <Route exact path="/product" >
            <ProductDescription />
          </Route>


          <Route exact path="/product/CARIBBEAN" >
            <CaribbeanProduct />
          </Route>

          
          <Route exact path="/product/GERMAN" >
            <GermanProduct />
          </Route>

          
          <Route exact path="/product/INDIAN" >
            <IndianProduct />
          </Route>

          
          <Route exact path="/product/JAPANESE" >
            <JapaneseProduct />
          </Route>

          
          <Route exact path="/product/KOREAN" >
            <KoreanProduct />
          </Route>

          
          <Route exact path="/product/VIETNAMESE" >
            <VietnamProduct />
          </Route>

          <Route exact path="/account/thanks">
            <Thanks />
          </Route>

          
        </Switch>
        <Footer />
      </Router>
    </>




  );
}

export default App;
