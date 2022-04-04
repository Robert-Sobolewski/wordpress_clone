import { AccountCircle } from "@mui/icons-material";
import { Box, FormControl, TextField } from "@mui/material";
import React, { Fragment, useState } from "react";
import axios from "axios";
import "./Register.scss";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Register = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);
  const [isDone, setIsDone] = useState<boolean | null>(null);
  const handleClose = () => {
    setShow(false);
    if (isDone == true) {
      navigate("/home");
    }
  };
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios
      .post(
        "http://127.0.0.1:4444/register",
        {
          username: name,
          email: email,
          password: password,
          avatar: "",
        },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((response: any) => {
        console.log("resp= ", response);
        try {
          setIsDone(response.data?.success);
          if (response.data?.success !== null) {
            handleShow();
          }
        } catch (e) {}
      })
      .catch((err: any) => console.log(err));
    setName("");
    setEmail("");
    setPassword("");
  };
  return (
    <Fragment>
      <div className="register">
        <Box
          component="form"
          autoComplete="off"
          id="register-form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h2>register page</h2>
          {/* <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} /> */}
          <TextField
            value={name}
            required
            onChange={(e: any) => setName(e.target.value)}
            id="input-name"
            label="Username"
            variant="standard"
          />
          <TextField
            value={email}
            required
            onChange={(e: any) => setEmail(e.target.value)}
            id="input-email"
            type="email"
            label="Email"
            variant="standard"
          />
          <TextField
            value={password}
            required
            onChange={(e: any) => setPassword(e.target.value)}
            id="input-password"
            type="password"
            label="Password"
            variant="standard"
          />
          <input className="btn btn-primary" type="submit" value="Submit" />
          <Link style={{ marginTop: 20 }} to="/login">
            I have already account
          </Link>
        </Box>
        {/* </FormControl> */}
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isDone !== null
            ? isDone == true
              ? "Congratulations! registered successfully"
              : "Register failed! change username or email and try again!"
            : null}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleClose} variant="primary">
            Understood
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default Register;

/*

 username: {
    type: String,
    required: true,
    unique: true,
  },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: { type: String, required:false},
  role: { type: String, required: true },


*/
