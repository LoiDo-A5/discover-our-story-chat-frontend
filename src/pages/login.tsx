import React, { useState, FormEvent } from "react";
import useStyles from "../styles/login/useLoginStyle";
import { Button, Container, TextField } from "@mui/material";
import Logo from "../images/logo.png";
import Image from "next/image";

interface LoginProps {
  onSubmit: (username: string, password: string) => void;
}

const LoginForm: React.FC<LoginProps> = ({ onSubmit }) => {
  const classes = useStyles();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Handle the login logic here
    onSubmit(username, password);
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
