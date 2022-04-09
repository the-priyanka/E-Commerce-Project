import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {
  About,
  AuthWrapper,
  Cart,
  Checkout,
  Error,
  Home,
  PrivateRoute,
  Products,
  SingleProduct,
} from "./pages";
import { Footer, Navbar, Sidebar } from "./components";

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/cart">
            <Cart />
          </Route>

          <Route exact path="/products">
            <Products />
          </Route>

          <Route
            exact
            path="/products/:id"
            children={<SingleProduct />}
          />

          <PrivateRoute exact path="/checkout">
            <Checkout />
          </PrivateRoute>

          <Route path="*">
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthWrapper>
  );
}

export default App;
