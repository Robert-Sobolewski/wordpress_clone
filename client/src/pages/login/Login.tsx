import { Box, TextField } from "@mui/material";
import axios from "axios";
import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../redux/userSlicer";
import "./Login.scss";
const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  // login function
  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    let res = await axios
      .post(
        "http://127.0.0.1:4444/login",
        {
          email: email,
          password: password,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((response: any) => {
        console.log(response.data);
        if (response.data?.success) {
          dispatch(setUser(response.data?.user));
          navigate("/home");
        }
      })
      .catch((err: any) => console.log("error= ", err));
    setEmail("");
    setPassword("");
  };

  return (
    <Fragment>
      <div className="login">
        <Box
          component="form"
          autoComplete="off"
          id="login-form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h2>Login page</h2>
          {/* <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} /> */}

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
        </Box>
      </div>
    </Fragment>
  );
};

export default Login;
