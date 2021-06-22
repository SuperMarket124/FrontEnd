import "./App.css";
import { Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { LoginForm, RegisterForm } from "./components/form";
import { ServiceCenter } from "./pages";

function App() {
  return (
    <Layout>
      <Switch>
        <Route
          exact
          from="/"
          render={() => {
            <span>test home</span>;
          }}
        />
        <Route path="/register" component={RegisterForm} />
        <Route path="/login" component={LoginForm} />
        <Route path="/service-center" component={ServiceCenter} />
      </Switch>
    </Layout>
  );
}

export default App;
