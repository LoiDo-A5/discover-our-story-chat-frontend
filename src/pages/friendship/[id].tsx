import React, { useEffect, useState, useCallback } from "react";
import { Typography, Box } from "@mui/material";
import useStyles from '@/styles/friendship/useFriendshipStyle';
import PrivateRoute from "@/commons/PrivateRoute";
import { axiosGet, axiosPost } from "@/utils/apis/axios";
import API from "@/configs/API";
import { User } from "@/utils/types";
import { ToastTopHelper } from "@/utils/utils";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MailIcon from '@mui/icons-material/Mail'; // New icon for requests
import ListUser from "./ListUser";
import ListFriend from "./ListFriend";
import ListRequest from "./ListRequest";


const Friendship: React.FC = () => {
    const classes = useStyles();
    const [users, setUsers] = useState<User[]>([]);
    const [friends, setFriends] = useState<User[]>([]);
    const [incomingRequests, setIncomingRequests] = useState<User[]>([]);
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const getListUser = useCallback(async () => {
        try {
            const { success, data } = await axiosGet(API.AUTH.LIST_USER);
            if (success && Array.isArray(data)) {
                setUsers(data);
            } else {
                ToastTopHelper.error("Failed to load users.");
            }
        } catch (error) {
            ToastTopHelper.error("Error fetching users.");
            console.error("Error fetching users:", error);
        }
    }, []);

    const getFriends = useCallback(async () => {
        try {
            const { success, data } = await axiosGet(API.FRIENDSHIP.FRIENDS_LIST);
            if (success && Array.isArray(data)) {
                setFriends(data);
            } else {
                ToastTopHelper.error("Failed to load friends.");
            }
        } catch (error) {
            ToastTopHelper.error("Error fetching friends.");
            console.error("Error fetching friends:", error);
        }
    }, []);

    const getIncomingRequests = useCallback(async () => {
        try {
            const { success, data } = await axiosGet(API.FRIENDSHIP.INCOMING_REQUESTS);
            if (success && Array.isArray(data)) {
                setIncomingRequests(data);
            } else {
                ToastTopHelper.error("Failed to load incoming requests.");
            }
        } catch (error) {
            ToastTopHelper.error("Error fetching incoming requests.");
            console.error("Error fetching incoming requests:", error);
        }
    }, []);

    const addFriend = async (id: string) => {
        try {
            const { success, data } = await axiosPost(API.FRIENDSHIP.REQUEST_FRIEND, {
                to_user_id: id,
            });

            if (success) {
                ToastTopHelper.success("Friend request sent!");

            } else {
                ToastTopHelper.error(data?.message || "Failed to send friend request.");
            }
        } catch (error) {
            ToastTopHelper.error("Error sending friend request.");
            console.error("Error sending friend request:", error);
        }
    };

    const acceptFriendRequest = async (requesterId: string) => {
        try {
            const { success, data } = await axiosPost(API.FRIENDSHIP.ACCEPT_REQUEST, {
                from_user_id: requesterId,
            });

            if (success) {
                ToastTopHelper.success("Friend request accepted!");
                getFriends();
                getIncomingRequests();
            } else {
                ToastTopHelper.error(data?.message || "Failed to accept friend request.");
            }
        } catch (error) {
            ToastTopHelper.error("Error accepting friend request.");
            console.error("Error accepting friend request:", error);
        }
    };

    useEffect(() => {
        getListUser();
        getFriends();
        getIncomingRequests();
    }, [getListUser, getFriends, getIncomingRequests]);

    return (
        <PrivateRoute>
            <div className={classes.background1}>
                <Box className={classes.tabsContainer}>
                    <Tabs value={value} onChange={handleChange} aria-label="friendship tabs">
                        <Tab icon={<PersonIcon />} label="Users" />
                        <Tab icon={<MailIcon />} label="Requests" />
                        <Tab icon={<FavoriteIcon />} label="Friends" />
                    </Tabs>
                </Box>

                <Box sx={{ p: 3 }}>
                    {value === 0 && (
                        <ListUser
                            users={users}
                            friends={friends}
                            addFriend={addFriend}
                        />
                    )}
                    {value === 1 && (
                        <ListRequest
                            incomingRequests={incomingRequests}
                            onAccept={acceptFriendRequest}
                        />
                    )}
                    {value === 2 && <ListFriend friends={friends} />}
                </Box>
            </div>
        </PrivateRoute>
    );
};

export default Friendship;