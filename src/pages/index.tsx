import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import useStyles from '../styles/login/useLoginStyle';
import { Container } from '@mui/material';
import Routes from '../utils/Route';
import HeaderPage from '../commons/HeaderPage';

interface HomePageProps { }

const HomePage: React.FC<HomePageProps> = () => {
    const classes = useStyles();
    const router = useRouter();
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    useEffect(() => {
        if (!isLoggedIn) {
            router.push(Routes.Login);
        } else {
            router.push(Routes.Home);
        }
    }, [isLoggedIn, router]);

    return (
        <Container className={classes.background}>
            <div>Home</div>
            <HeaderPage/>
        </Container>
    );
};

export default HomePage;
