import React, { useEffect, useState } from "react";
import { Button, TextField, Typography, Container, Avatar, Box } from "@mui/material";
import useStyles from '@/styles/friendship/useFriendshipStyle';
import PrivateRoute from "@/commons/PrivateRoute";
import { axiosGet, axiosPost } from "@/utils/apis/axios";
import API from "@/configs/API";
import { User } from "@/utils/types";
import { ToastTopHelper } from "@/utils/utils";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import ListUser from "./ListUser";

const Friendship: React.FC = () => {
    const classes = useStyles();
    const [users, setUsers] = useState<User[]>([]);
    const [friends, setFriends] = useState<string[]>([]);
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

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
        <PrivateRoute>
            <div className={classes.background1}>
                <Box className={classes.tabsContainer}>
                    <Tabs value={value} onChange={handleChange} aria-label="icon tabs example">
                        <Tab icon={<PhoneIcon />} aria-label="phone" />
                        <Tab icon={<FavoriteIcon />} aria-label="favorite" />
                        <Tab icon={<PersonPinIcon />} aria-label="person" />
                    </Tabs>
                </Box>

                <Box sx={{ p: 3 }}>
                    {value === 0 && <ListUser />}
                    {value === 1 && (
                        <Typography variant="h6">Favorite Content</Typography>
                    )}
                    {value === 2 && (
                        <Typography variant="h6">Person Content</Typography>
                    )}
                </Box>
            </div>
        </PrivateRoute>
    );
};

export default Friendship;
