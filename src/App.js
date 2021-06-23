import "./App.css";
import { Switch, Route } from "react-router-dom";
import { LoginForm, RegisterForm } from "./components/form";
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
        <Route path="/member/join" component={RegisterForm} />
        <Route path="/member/login" component={LoginForm} />
        {/* Boards */}
        <Route path="/board" component={ServiceCenter} />
        {/* Goods */}
        <Route path="/goods/event" component={Event} />
      </Switch>
    </Layout>
  );
}

export default App;
