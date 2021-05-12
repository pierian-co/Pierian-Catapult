import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Login } from './components/Login';
import { HomeProducts } from './components/Home_products';
import { AccountProducts } from './components/Account_products';


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
        </Switch>
        <Footer />
      </Router>
    </>




  );
}

export default App;
