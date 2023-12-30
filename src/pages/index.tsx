import React, { useEffect } from 'react';
import useStyles from '../styles/login/useLoginStyle';
import { Container } from '@mui/material';
import HeaderPage from '../commons/HeaderPage';
import PrivateRoute from '@/commons/PrivateRoute';

interface HomePageProps { }

const HomePage: React.FC<HomePageProps> = () => {
    const classes = useStyles();

    return (
        <PrivateRoute>
            <Container className={classes.background}>
                <div>Home</div>
            </Container>
        </PrivateRoute>
    );
};

export default HomePage;
