import React, { useEffect, useRef, useState } from 'react';
import PrivateRoute from '@/commons/PrivateRoute';
import { List, ListItem, ListItemText, TextField, Button, Avatar } from '@mui/material';
import useStyles from '@/styles/room/useRoomStyle';
import { useRouter } from 'next/router';
import { axiosGet } from '@/utils/apis/axios';
import API from '@/configs/API';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { RootState } from '@/utils/types';
import useChat from '@/hooks/useChat';

const Room: React.FC = () => {
    const classes = useStyles();
    const router = useRouter();
    const { id } = router.query;
    const user = useSelector((state: RootState) => state.auth.account.user);
    const [roomId, setRoomId] = useState<string | undefined>();

    useEffect(() => {
        if (typeof id === 'string') {
            setRoomId(id);
        }
    }, [id]);

    const { messages, sendMessage } = useChat(roomId || "");
    const [message, setMessage] = useState("");
    const [listMessage, setListMessage] = useState<any[]>([]);
    const messagesEndRef = useRef<null | HTMLDivElement>(null);
    const handleSendMessage = () => {
        sendMessage(message, user?.username);
        setMessage("");
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            handleSendMessage();
        }
    };


    const getListMessage = async () => {
        if (!roomId) return;
        const { success, data } = await axiosGet(`${API.MESSAGE.LIST_MESSAGES}?room_id=${roomId}`);
        if (success) {
            setListMessage(data)
        }
    }

    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        if (roomId) {
            getListMessage()
        }
    }, [roomId]);

    useEffect(() => {
        scrollToBottom();
    }, [listMessage, messages]);

    return (
        <PrivateRoute>
            <div className={classes.background}>
                <List className={classes.messageList}>
                    {listMessage.map((msg, index) => {
                        const isMe = user.id === msg.sender.id;
                        const formattedTimestamp = moment(msg.timestamp).format('HH:mm DD/MM/YYYY');
                        return (
                            <ListItem key={index} className={isMe ? classes.myMessage : classes.otherMessage}>
                                <div className={classes.itemAvatar}>
                                    <Avatar src={msg.sender.avatar} />
                                    <div className={classes.textName}>{isMe ? 'Me' : msg?.sender?.name}</div>
                                </div>
                                <ListItemText
                                    primary={msg.content}
                                    secondary={formattedTimestamp || ''}
                                    className={classes.listItemText}
                                />
                            </ListItem>
                        );
                    })}
                    {messages.map((msg, index) => {
                        const formattedTimestamp = moment().format('HH:mm DD/MM/YYYY');
                        const isMe = user.id === msg.user.id;
                        return (
                            <ListItem key={index} className={isMe ? classes.myMessage : classes.otherMessage}>
                                <div className={classes.itemAvatar}>
                                    <Avatar src={msg.user.avatar} />
                                    <div className={classes.textName}>{isMe ? 'Me' : msg?.user?.name}</div>
                                </div>
                                <ListItemText
                                    primary={msg?.message}
                                    secondary={formattedTimestamp}
                                    className={classes.listItemText}
                                />
                            </ListItem>
                        )
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

export default Room;





