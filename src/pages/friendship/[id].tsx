import React from "react";
import { Button, TextField, Typography, Container } from "@mui/material";
import useStyles from '@/styles/friendship/useFriendshipStyle';

const Friendship: React.FC = () => {
    const classes = useStyles();

    const dummyUsers = [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Smith" },
        { id: 3, name: "Alice Johnson" },
        { id: 4, name: "Bob Brown" },
    ];

    return (
        <div className={classes.background}>
            <Container className={classes.container}>
                <div className={classes.searchBar}>
                    <TextField placeholder="Search by name or email" fullWidth />
                    <Button variant="contained">Search</Button>
                </div>

                <Typography variant="h6" gutterBottom>
                    Search Users
                </Typography>
                <div className={classes.searchResults}>
                    {dummyUsers.map((user) => (
                        <div key={user.id} className={classes.userCard}>
                            <div className={classes.avatar}></div>
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
    );
};

export default Friendship;
