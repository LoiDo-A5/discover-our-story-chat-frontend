import React, { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
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
import ListUser from "./ListUser";
import ListFriend from "./ListFriend";


const Friendship: React.FC = () => {
    const classes = useStyles();
    const [users, setUsers] = useState<User[]>([]);
    const [friends, setFriends] = useState<User[]>([]);
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
            setFriends(data);
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
                        <Tab icon={<PhoneIcon />} aria-label="person" />
                        <Tab icon={<FavoriteIcon />} aria-label="favorite" />
                    </Tabs>
                </Box>

                <Box sx={{ p: 3 }}>
                    {value === 0 && <ListUser users={users} friends={friends} addFriend={addFriend} />}
                    {value === 1 && <ListFriend friends={friends} />}
                </Box>
            </div>
        </PrivateRoute>
    );
};

export default Friendship;
