import { Layout } from "antd";
import { Switch, Route, withRouter, useHistory } from "react-router-dom";
import Login from "./Containers/Auth";
import Dashboard from "./Containers/Dashboard";
import Location from "./Containers/Locations";
import "./global.less";

const { Sider, Content } = Layout;

const App = () => {
  const history = useHistory();
  return (
    <div className="App">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/locations" component={Location} />
          </Switch>
    </div>
  );
};

export default withRouter(App);
