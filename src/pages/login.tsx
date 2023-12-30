import React, { useState, FormEvent, useEffect } from "react";
import { Button, Container, TextField, Link } from "@mui/material";
import Logo from "../images/logo.png";
import Image from "next/image";
import { axiosPost } from "../utils/apis/axios";
import API from "../configs/API";
import { useDispatch, useSelector } from "react-redux";
import { login, loginFailure } from "../redux/reducer/authSlice";
import Routes from '../utils/Route';
import { useRouter } from "next/router";
import useStyles from "../styles/login/useLoginStyle";

interface LoginProps { }

const LoginForm: React.FC<LoginProps> = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const router = useRouter();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const { success, data } = await axiosPost(API.AUTH.LOGIN, {
      username: username,
      password: password,
    });
    if (success) {
      router.push(Routes.Home);
      dispatch(login(data));
    } else {
      dispatch(loginFailure(data));
    }
  };

  const handleNavigateSignUp = () => {
    router.push(Routes.Signup);
  }

  useEffect(() => {
    if (isLoggedIn) {
      router.push(Routes.Home);
    }
  }, [isLoggedIn, router]);

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
        <div onClick={handleNavigateSignUp} className={classes.signupLink}>
          <Link variant="body2">
            Sign up for me
          </Link>
        </div>
      </form>
    </Container>
  );
};

export default LoginForm;
