import { Layout } from "antd";
import Button from "./Components/antd/Button";
import { Switch, Route, withRouter, useHistory } from "react-router-dom";
import Counter from "./Containers/counter/index";
import Posts from "./Containers/posts";
import "./global.less";

const { Sider, Content } = Layout;

const App = () => {
  const history = useHistory();
  const AppLayout = () => {
    return <Counter />;
  };
  return (
    <div className="App">
      <Layout style={{ minHeight: "1200px", overflow: "auto" }}>
        <Content>
          <Switch>
            <Route exact path="/" component={AppLayout} />
            <Route path="/postsList" component={Posts} />
          </Switch>
          <div style={{ marginTop: "2rem" }}>
            <Button
              style={{ marginRight: "1rem" }}
              type="primary"
              onClick={() => history.push("/")}
            >
              Counter
            </Button>
            <Button type="primary" onClick={() => history.push("/postsList")}>
              Posts
            </Button>
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default withRouter(App);
