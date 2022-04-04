import { AccountCircle } from "@mui/icons-material";
import { Box, FormControl, TextField } from "@mui/material";
import React, { Fragment } from "react";
import "./Register.scss";
const Register = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <Fragment>
      <div className="register">
        <h1>register page</h1>

        <FormControl
          onSubmit={handleSubmit}
          id="register-form"
          variant="standard"
        >
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField id="input-with-sx" label="With sx" variant="standard" />
          </Box>
        </FormControl>
      </div>
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
