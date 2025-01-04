import React from "react";
import { useRouter } from "next/router";
import { Button, TextField, Typography, Container, Avatar } from "@mui/material";
import useStyles from '@/styles/friendship/useFriendshipStyle';

interface Friend {
    id: string;
    name: string;
    avatar: string;
}

interface ListFriendProps {
    friends: Friend[];
}

const ListFriend: React.FC<ListFriendProps> = ({ friends }) => {
    const classes = useStyles();
    const router = useRouter();


    const handleNavigateToDM = (friendId: string) => {
        router.push(`/dm/${friendId}`);
    };

    return (
        <div className={classes.background}>
            <Container className={classes.container}>
                <Typography variant="h6" gutterBottom>
                    List Friend
                </Typography>

                <div className={classes.searchResults}>
                    {friends.map((user) => (
                        <div key={user.id} className={classes.userCard}>
                            <Avatar className={classes.avatar} src={user?.avatar} />
                            <div className={classes.userName}>{user.name}</div>
                            <Button
                                variant="contained"
                                className={classes.addButton}
                                onClick={() => handleNavigateToDM(user.id)}
                            >
                                Chat
                            </Button>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default ListFriend;
