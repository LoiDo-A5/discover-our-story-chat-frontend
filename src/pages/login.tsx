import React, { useState, FormEvent } from "react";
import useStyles from "../styles/login/useLoginStyle";
import { Button, Container, TextField } from "@mui/material";
import Logo from "../images/logo.png";
import Image from "next/image";
import { axiosPost } from "../utils/apis/axios";
import API from "../configs/API";

interface LoginProps {}

const LoginForm: React.FC<LoginProps> = () => {
  const classes = useStyles();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const { success, data } = await axiosPost(API.AUTH.LOGIN, {
      username: username,
      password: password,
    });
    console.log("success", success, data);
  };

  return (
    <Container className={classes.background}>
      <form onSubmit={handleSubmit}>
        <div className={classes.wrapLogo}>
          <Image src={Logo} alt="" className={classes.logoChatRoom} />
        </div>
        <div className={classes.title}>CHAT ROOM</div>
        <TextField
          label="Username"
          fullWidth
          variant="outlined"
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          fullWidth
          variant="outlined"
          margin="normal"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </form>
    </Container>
  );
};

export default LoginForm;
