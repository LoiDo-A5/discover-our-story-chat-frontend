// SignupForm.tsx
import React, { useState, FormEvent, useEffect } from "react";
import useStyles from "../styles/login/useLoginStyle";
import { Button, Container, TextField, Link } from "@mui/material";
import { axiosPost } from "../utils/apis/axios";
import API from "../configs/API";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Routes from "../utils/Route";
import { ToastTopHelper } from "@/utils/utils";

interface SignupFormProps { }

const SignupForm: React.FC<SignupFormProps> = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const router = useRouter();

    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            ToastTopHelper.error('Password and Confirm Password do not match');
            return;
        }

        const { success, data } = await axiosPost(API.AUTH.SIGNUP, {
            email: email,
            phone: phone,
            password1: password,
            password2: confirmPassword
        });

        if (success) {
            router.push(Routes.Home);
        } else {
            ToastTopHelper.error('Signup failed');
        }
    };

    return (
        <Container className={classes.background}>
            <form onSubmit={handleSubmit}>
                <div className={classes.title}>SIGN UP</div>
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
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Sign Up
                </Button>
                <div className={classes.signupLink}>
                    <Link href={Routes.Login} variant="body2">
                        Already have an account? Sign in
                    </Link>
                </div>
            </form>
        </Container>
    );
};

export default SignupForm;
