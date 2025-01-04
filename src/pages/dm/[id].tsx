import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { List, ListItem, ListItemText, TextField, Button, Avatar } from '@mui/material';
import useStyles from '@/styles/room/useRoomStyle';
import { useSelector } from 'react-redux';
import { RootState } from '@/utils/types';
import useChat from '@/hooks/useChat';
import PrivateRoute from '@/commons/PrivateRoute';

const DirectMessage: React.FC = () => {
    const classes = useStyles();
    const router = useRouter();
    const { id } = router.query;
    const user = useSelector((state: RootState) => state.auth.account.user);
    const [friendId, setFriendId] = useState<string | undefined>();

    useEffect(() => {
        if (typeof id === 'string') {
            setFriendId(id);
        }
    }, [id]);

    const { messages, sendMessage } = useChat("dm", friendId || "");
    const [message, setMessage] = useState("");
    const messagesEndRef = useRef<null | HTMLDivElement>(null);

    const handleSendMessage = () => {
        if (friendId) {
            sendMessage(message, user?.id || "", friendId);
            setMessage("");
        }
    };
    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            handleSendMessage();
        }
    };

    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return (
        <PrivateRoute>
            <div className={classes.background}>
                <List className={classes.messageList}>
                    {messages.map((msg, index) => {
                        const isMe = user.id === msg.user.id;
                        return (
                            <ListItem key={index} className={isMe ? classes.myMessage : classes.otherMessage}>
                                <div className={classes.itemAvatar}>
                                    <Avatar src={msg.user.avatar} />
                                    <div className={classes.textName}>{isMe ? 'Me' : msg?.user?.name}</div>
                                </div>
                                <ListItemText primary={msg.message} secondary={msg.timestamp} />
                            </ListItem>
                        );
                    })}
                    <div ref={messagesEndRef} />
                </List>
                <TextField
                    label="Type your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <Button variant="contained" onClick={handleSendMessage}>Send</Button>
            </div>
        </PrivateRoute>
    );
};

export default DirectMessage;
