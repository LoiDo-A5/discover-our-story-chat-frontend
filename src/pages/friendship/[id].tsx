import React, { useEffect, useState } from "react";
import { Button, TextField, Typography, Container, Avatar } from "@mui/material";
import useStyles from '@/styles/friendship/useFriendshipStyle';
import PrivateRoute from "@/commons/PrivateRoute";
import { axiosGet } from "@/utils/apis/axios";
import API from "@/configs/API";
import { User } from "@/utils/types";

const Friendship: React.FC = () => {
    const classes = useStyles();
    const [users, setUsers] = useState<User[]>([]);

    const getListUser = async () => {
        const { success, data } = await axiosGet(API.AUTH.LIST_USER);
        if (success) {
            setUsers(data)
        }
    }


    useEffect(() => {
        getListUser()
    }, []);

    return (
        <PrivateRoute>
            <div className={classes.background}>
                <Container className={classes.container}>
                    <Typography variant="h6" gutterBottom>
                        Search Users
                    </Typography>
                    <div className={classes.searchBar}>
                        <TextField placeholder="Search by name or email" fullWidth />
                        <Button className={classes.buttonSearch} variant="contained">Search</Button>
                    </div>

                    <div className={classes.searchResults}>
                        {users.map((user) => (
                            <div key={user.id} className={classes.userCard}>
                                <Avatar
                                    className={classes.avatar}
                                    src={user?.avatar}
                                />
                                <div className={classes.userName}>{user.name}</div>
                                <Button
                                    variant="contained"
                                    className={classes.addButton}
                                >
                                    Add Friend
                                </Button>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
        </PrivateRoute>
    );
};

export default Friendship;
