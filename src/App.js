import HomePage from "./components/HomePage";
import LoginForm from "./components/Login";
import RegisterForm from "./components/Register";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/register" component={RegisterForm} />
        </Switch>
      </Router>
      {/* <RegisterForm/> */}
    </div>
  );
}

export default App;
