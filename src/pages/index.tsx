// src/pages/HomePage.js

import React, { useState } from 'react';
import { Container, TextField, Button, List, ListItem, ListItemText } from '@mui/material';
import useStyles from '../styles/login/useLoginStyle';
import HeaderPage from '../commons/HeaderPage';
import PrivateRoute from '@/commons/PrivateRoute';
import useChat from '../hooks/useChat';

const HomePage = () => {
    const classes = useStyles();
    const [roomId, setRoomId] = useState('1');  // Thay đổi roomId theo yêu cầu của bạn
    const { messages, sendMessage } = useChat(roomId);
    const [message, setMessage] = useState("");

    const username = '0902415668'
    const handleSendMessage = () => {
        sendMessage(message, username);
        setMessage("");
    };

    return (
        <PrivateRoute>
            <Container className={classes.background}>
                <div>Home</div>
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

export default HomePage;
