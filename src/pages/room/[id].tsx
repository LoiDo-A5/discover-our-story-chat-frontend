import React, { useEffect, useState } from 'react';
import PrivateRoute from '@/commons/PrivateRoute';
import { List, ListItem, ListItemText, Container, TextField, Button, Avatar } from '@mui/material';
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

    const username = '0902415668';
    const handleSendMessage = () => {
        sendMessage(message, username);
        setMessage("");
    };

    return (
        <PrivateRoute>
            <div className={classes.background}>
                <List className={classes.messageList}>
                    {messages.map((msg, index) => (
                        <ListItem key={index} className={msg.isMe ? classes.myMessage : classes.otherMessage}>
                            <div className={classes.itemAvatar}>
                                <Avatar src={msg.avatar} />
                            </div>
                            <ListItemText
                                secondary={msg}
                                className={classes.listItemText} />
                        </ListItem>
                    ))}
                </List>
                <TextField
                    label="Type your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <Button variant="contained" onClick={handleSendMessage}>Send</Button>
            </div>
        </PrivateRoute>
    );
};

export default Room;





