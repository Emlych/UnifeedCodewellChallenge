import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/feature">
            <Feature />
          </Route>
          <Route path="/pricing">
            <Pricing />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route component={() => 404} />
        </Switch>
      </div>
    </Router>
  );
}
function Feature() {
  return <h2>Features to sell</h2>;
}
function Pricing() {
  return <h2>Pricing</h2>;
}
function Login() {
  return <h2>Login</h2>;
}

export default App;
