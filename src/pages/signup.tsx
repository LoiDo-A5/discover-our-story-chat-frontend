import React, { useState, FormEvent } from "react";
import { Button, Container, TextField, Link, Typography } from "@mui/material";
import { axiosPost } from "../utils/apis/axios";
import API from "../configs/API";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Routes from "../utils/Route";
import { ToastTopHelper } from "@/utils/utils";
import useStyles from "../styles/sign-up/useSignUpStyle";

interface SignupFormProps { }

const SignupForm: React.FC<SignupFormProps> = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [name, setName] = useState<string>("");

  const validateForm = () => {
    if (!email || !phone || !password || !confirmPassword || !name) {
      ToastTopHelper.error("All fields are required");
      return false;
    }

    if (!name.trim()) {
      ToastTopHelper.error("Name is required");
      return false;
    }

    if (name.length > 20) {
      ToastTopHelper.error("Name cannot be longer than 20 characters");
      return false;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      ToastTopHelper.error("Invalid email address");
      return false;
    }

    if (!/^[0-9]+$/.test(phone)) {
      ToastTopHelper.error("Phone number must contain only digits");
      return false;
    }

    if (password !== confirmPassword) {
      ToastTopHelper.error("Password and Confirm Password do not match");
      return false;
    }

    return true;
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    const { success, data } = await axiosPost(API.AUTH.SIGNUP, {
      email: email,
      phone: phone,
      password1: password,
      password2: confirmPassword,
      name: name,
    });

    console.log('name', name)
    if (success) {
      router.push(Routes.Home);
    }
  };

  const handleNavigateSignUp = () => {
    router.push(Routes.Login);
  };

  return (
    <div className={classes.background}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Typography className={classes.title}>SIGN UP</Typography>
        <TextField
          label="Name or Nick Name"
          fullWidth
          variant="outlined"
          margin="normal"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Email"
          fullWidth
          variant="outlined"
          margin="normal"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Phone"
          fullWidth
          variant="outlined"
          margin="normal"
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
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
        <TextField
          label="Confirm Password"
          fullWidth
          variant="outlined"
          margin="normal"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          className={classes.submitButton}
        >
          Sign Up
        </Button>
        <div onClick={handleNavigateSignUp} className={classes.signupLink}>
          <Link variant="body2">Already have an account? Sign in</Link>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;