import "./App.css";
import { Switch, Route } from "react-router-dom";
import { LoginForm, RegisterForm } from "./components/form";
import LoginFormContainer from "./containers/LoginFormContainer";
import { ServiceCenter, Event } from "./pages";
import { Layout, MainArticle } from "./components";

// TODO suroutingb
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
        {/* Member */}
        <Route path="/join" component={RegisterForm} />
        <Route path="/login" component={LoginFormContainer} />
        {/* Boards */}
        <Route path="/board" component={ServiceCenter} />
        {/* Goods */}
        <Route path="/goods/event" component={Event} />
      </Switch>
    </Layout>
  );
}

export default App;
