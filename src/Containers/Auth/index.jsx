import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import PostsSlice from "./slice";
import * as constants from "./constants";
import authSaga from "./saga";
import * as actions from "./slice";

import { useInjectReducer, useInjectSaga } from "redux-injectors";
import {Form, Button, Input } from "antd";
import { createStructuredSelector } from "reselect";
import { makeSelectLogin } from "./selectors";

const stateSelector = createStructuredSelector({
  loginData: makeSelectLogin(),
});

const Login = () => {
  useInjectReducer({ key: constants.NAME_SPACE, reducer: PostsSlice });
  useInjectSaga({ key: constants.NAME_SPACE, saga: authSaga });
  const dispatch = useDispatch();
  const { loginData} = useSelector(stateSelector);
  const history = useHistory()
  return (
    <div style={{ 
      height:"100vh",
      backgroundPosition:"center",
      backgroundSize:"cover",
      backgroundImage: `url("http://localhost:4000/images/auth.png")` 
    }}>
      <div style={{    width: "425px",
    height: "563px",
    backgroundColor: "#97CDFF",
    position: "absolute",
    borderRadius: "35px",
    left: "40%",
    top: "25%",
    opacity: "0.5"}}>
       <div style = {{}}>
        Logo Here
       </div>

       <div style = {{textAlign:"left",marginLeft:"40px"}}>
        <h2 style = {{color:"white",height:"96px",fontFamily: "Inter",
fontStyle: "normal",
fontWeight: 600,
fontSize: "32px",
lineHeight: "48px"}}>
          Welcome To 
          <br/>
          AGH Transport
        </h2>
       </div>
      <Form onFinish = {(values)=> dispatch(actions.loginRequest({values,history}))} style={{
        padding:"50px"
      }}>
     <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input style={{padding:"16px 12px"}} />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password style={{padding:"16px 12px"}} />
      </Form.Item>

      <Form.Item>
        <Button style={{
          width:"320px",
          height:"56px",
          background:"#1890FF",
          color:"#FFF",
          fontSize:"16px",
          fontWeight:"bold"
        }} htmlType="submit" loading={loginData.loading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
      </div>
    </div>
  );
};

export default Login;
