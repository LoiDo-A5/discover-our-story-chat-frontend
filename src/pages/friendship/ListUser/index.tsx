import React, { useEffect, useState } from "react";
import { Button, TextField, Typography, Container, Avatar } from "@mui/material";
import useStyles from '@/styles/friendship/useFriendshipStyle';
import PrivateRoute from "@/commons/PrivateRoute";
import { axiosGet, axiosPost } from "@/utils/apis/axios";
import API from "@/configs/API";
import { User } from "@/utils/types";
import { ToastTopHelper } from "@/utils/utils";

const ListUser: React.FC = () => {
    const classes = useStyles();
    const [users, setUsers] = useState<User[]>([]);
    const [friends, setFriends] = useState<string[]>([]);

    const addFriend = async (id: string) => {
        const { success, data } = await axiosPost(API.FRIENDSHIP.REQUEST_FRIEND, {
            to_user_id: id,
        });

        if (success) {
            ToastTopHelper.success("Request friend success");
        }
    };

    const getListUser = async () => {
        const { success, data } = await axiosGet(API.AUTH.LIST_USER);
        if (success) {
            setUsers(data);
        }
    };

    const getFriends = async () => {
        const { success, data } = await axiosGet(API.FRIENDSHIP.FRIENDS_LIST);
        if (success) {
            setFriends(data.map((friend: User) => friend.id));
        }
    };

    useEffect(() => {
        getListUser();
        getFriends();
    }, []);

    return (
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
                                onClick={() => addFriend(user?.id)}
                                disabled={friends.includes(user.id)}
                            >
                                {friends.includes(user.id) ? "Bạn bè" : "Add Friend"}
                            </Button>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default ListUser;
