import React from "react";
import { Container, Breadcrumbs, Box, Grid, Typography } from "@mui/material";
import Link from 'next/link';
import { useDispatch, useSelector } from "react-redux";
import Routes from '../utils/Route';
import { useRouter } from "next/router";
import MyAccountNav from "@/commons/MyAccountNav";
import useStyles from "../styles/my-account/useMyAccountStyle";

interface BreadCrumbItem {
    to: string;
    text: string;
    active?: boolean;
}

interface MyAccountProps { }

const MyAccount: React.FC<MyAccountProps> = () => {
    const classes = useStyles();
    const user = useSelector((state) => state.auth.account.user);

    const defaultUserData = {
        avatar: user?.avatar,
        name: user?.name || '',
        email: user?.email || '',
        phone_number: user?.phone_number || '',
        role: user?.role,
    };
    const [userProfile, setUserProfile] = React.useState(defaultUserData);

    const breadCrumbs: BreadCrumbItem[] = [
        {
            to: Routes.Home,
            text: 'home',
        },
        {
            to: Routes.MyAccount,
            text: 'my_account',
            active: true,
        },
    ];

    return (
        <div className={classes.wrapMyAccountPage} style={{ width: '100%'}}>
            <Container className={classes.customContainer}>
                <Breadcrumbs>
                    {breadCrumbs.map((item, index) => (
                        <Link href={item.to} key={index}>
                            <Typography color={item.active ? 'textPrimary' : 'inherit'}>{item.text}</Typography>
                        </Link>
                    ))}
                </Breadcrumbs>
                <h1 className={classes.heading}>{'my_account'}</h1>

                <Box sx={{ pt: 3 }}>
                    <Grid
                        container
                        spacing={3}
                    >
                        <Grid
                            item
                            xs={12}
                            lg={3}
                        >
                            <MyAccountNav
                                user={user}
                                userProfile={userProfile}
                                setUserProfile={setUserProfile}
                            />
                        </Grid>

                        <Grid
                            item
                            xs={12}
                            lg={9}
                        >
                            {/* Your other content */}
                            <div>123</div>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default MyAccount;
