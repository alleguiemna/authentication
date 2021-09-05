import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/actions/actions";
import {Redirect} from 'react-router-dom'

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading } = useSelector((state) => state);
  const logUser = (e) => {
    e.preventDefault();
    dispatch(loginUser({email, password}));
  };
  return (
    <div>
     {localStorage.getItem("token") ? (
        <Redirect to="/profile" />
      ) : loading ? (
        <h1>please wait ...</h1>
      ) : ( 
        <div>
          <Form className="col-md-5 m-auto">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={logUser}>
              Submit
            </Button>
          </Form>
        </div>
      )} 
    </div>
  );
};

export default Login;
