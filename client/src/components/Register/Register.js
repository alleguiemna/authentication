import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/actions/actions";
import { Redirect } from "react-router-dom";

const Register = () => {
  const { loading, users } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const addUser = (e) => {
    e.preventDefault();
    dispatch(registerUser({fullName, email, password, phone}));
  };
  return (
    <div>
      {loading ? (
        <h1>please wait ...</h1>
      ) : users ? (
        <Redirect to="/login" />
      ) : (
        <div>
          <h1>sign Up</h1>
          <Form className="col-md-5 m-auto">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>FullName</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your fullName"
                onChange={(e) => setFullName(e.target.value)}
                value={fullName}
              />
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
              <Form.Label>Phone:</Form.Label>
              <Form.Control
                type="text"
                placeholder="phone"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={addUser}>
              Submit
            </Button>
          </Form>
        </div>
      )}
    </div>
  );
};

export default Register;
