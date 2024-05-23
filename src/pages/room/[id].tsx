import React, { useEffect, useState } from 'react';
import PrivateRoute from '@/commons/PrivateRoute';
import { List, ListItem, ListItemText, Container, TextField, Button } from '@mui/material';
import useChat from '../../hooks/useChat';
import useStyles from '@/styles/room/useRoomStyle';
import { useRouter } from 'next/router';

const Room: React.FC = () => {
    const classes = useStyles();
    const router = useRouter();
    const { id } = router.query;
    const [roomId, setRoomId] = useState<string>(typeof id === 'string' ? id : '1');
    const { messages, sendMessage } = useChat(roomId);
    const [message, setMessage] = useState("");
    const [rooms, setRooms] = useState([]);

    const username = '0902415668'
    const handleSendMessage = () => {
        sendMessage(message, username);
        setMessage("");
    };


    return (
        <PrivateRoute>
            <Container className={classes.background}>
                <TextField
                    label="Room ID"
                    value={roomId}
                    onChange={(e) => setRoomId(e.target.value)}
                />
                <List>
                    {messages.map((msg, index) => (
                        <ListItem key={index}>
                            <ListItemText primary={msg} />
                        </ListItem>
                    ))}
                </List>
                <TextField
                    label="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <Button onClick={handleSendMessage}>Send</Button>
            </Container>

        </PrivateRoute>
    );
};

export default Room;





