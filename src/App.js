import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import AuthProvider from "./Contexts/AuthProvider/AuthProvider";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import NotFound from "./Pages/NotFound/NotFound";
import Apartment from "./Pages/Apartment/Apartment";
import PraivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Explore from "./Pages/Explore/Explore";
import CheakOut from "./Pages/CheakOut/CheakOut";
import Dashbord from "./Pages/Deshboard/Dashbord";
import AdminDeshboard from "./Pages/AdminDeshboard/AdminDeshbord/AdminDeshboard";
import AdminRoute from "./Pages/Login/AdminRoute/AdminRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/explore">
              <Explore />
            </Route>
            <Route path="/apartment/:id">
              <Apartment />
            </Route>
            <PraivateRoute path="/dashboard">
              <Dashbord />
            </PraivateRoute>

            <AdminRoute path="/admindashboard">
              <AdminDeshboard />
            </AdminRoute>

            <PraivateRoute path="/cheakout/:id">
              <CheakOut />
            </PraivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
