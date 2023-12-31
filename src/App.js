import ManageInsurance from "./Container/System/ManageInsurance";
import DetailInsurance from "./components/DetailInsurance";
import HomePage from "./components/HomePage";
import ListOfInsurance from "./components/ListOfInsurance";
import LoginForm from "./components/Login";
import RegisterForm from "./components/Register";
import { ToastContainer } from "react-toastify";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import PaymentRequest from "./components/PaymentRequest";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/register" component={RegisterForm} />
          <Route exact path="/listInsurance" component={ListOfInsurance} />
          <Route exact path="/detailInsurance" component={DetailInsurance} />
          <Route exact path="/manageInsurance" component={ManageInsurance} />
          <Route exact path="/PaymentRequest" component={PaymentRequest} />
        </Switch>
      </Router>
      {/* <RegisterForm/> */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        pauseOnHover={false}
        rtl={false}
        pauseOnFocusLoss
        closeOnClick
        draggable
        //closeButton={<CustomToastCloseButton />}
      />
    </div>
  );
}

export default App;
