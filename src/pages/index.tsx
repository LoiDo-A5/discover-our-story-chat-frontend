import React, { useEffect } from 'react';
import useStyles from '../styles/login/useLoginStyle';
import { Container } from '@mui/material';
import HeaderPage from '../commons/HeaderPage';

interface HomePageProps { }

const HomePage: React.FC<HomePageProps> = () => {
    const classes = useStyles();

    return (
        <Container className={classes.background}>
            <div>Home</div>
            <HeaderPage />
        </Container>
    );
};

export default HomePage;
