import React from "react";
import { Button, Typography, Container, Avatar, Box } from "@mui/material";
import useStyles from '@/styles/friendship/useFriendshipStyle';
import { User } from "@/utils/types";
import InboxIcon from '@mui/icons-material/Inbox'; // Import a suitable icon

interface ListRequestProps {
    incomingRequests?: User[];
    onAccept?: (id: string) => void;
}

const ListRequest: React.FC<ListRequestProps> = ({
    incomingRequests = [],
    onAccept = () => { },
}) => {
    const classes = useStyles();

    return (
        <div className={classes.background}>
            <Container className={classes.container}>
                <Typography variant="h6" gutterBottom>
                    Incoming Friend Requests
                </Typography>
                <div className={classes.searchResults}> {/* Re-using searchResults style */}
                    {incomingRequests.length > 0 ? (
                        incomingRequests.map((requestingUser) => (
                            <div key={requestingUser.id} className={classes.userCard}>
                                <Avatar
                                    className={classes.avatar}
                                    src={requestingUser?.avatar || ''}
                                    alt={requestingUser.name || 'User Avatar'}
                                />
                                <div className={classes.userName}>{requestingUser.name}</div>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.addButton} // Can style this differently if needed
                                    onClick={() => onAccept(requestingUser.id)}
                                >
                                    Accept
                                </Button>
                            </div>
                        ))
                    ) : (
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 4, color: 'text.secondary' }}>
                            <InboxIcon sx={{ fontSize: 60, mb: 2 }} /> {/* Larger icon, margin-bottom */}
                            <Typography variant="h6" align="center" gutterBottom>
                                No New Friend Requests
                            </Typography>
                            <Typography variant="body2" align="center">
                                Looks like your inbox is empty. Check back later!
                            </Typography>
                        </Box>
                    )}
                </div>
            </Container>
        </div>
    );
};

export default ListRequest;