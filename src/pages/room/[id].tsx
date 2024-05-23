import React, { useEffect, useState } from 'react';
import PrivateRoute from '@/commons/PrivateRoute';
import { List, ListItem, ListItemText, Container, TextField, Button, Avatar } from '@mui/material';
import useChat from '../../hooks/useChat';
import useStyles from '@/styles/room/useRoomStyle';
import { useRouter } from 'next/router';
import { axiosGet } from '@/utils/apis/axios';
import API from '@/configs/API';

const Room: React.FC = () => {
    const classes = useStyles();
    const router = useRouter();
    const { id } = router.query;
    const [roomId, setRoomId] = useState<string | undefined>();

    useEffect(() => {
        if (typeof id === 'string') {
            setRoomId(id);
        }
    }, [id]);

    const { messages, sendMessage } = useChat(roomId || '');
    const [message, setMessage] = useState("");
    const [listMessage, setListMessage] = useState<any[]>([]);

    const username = '0902415668';
    const handleSendMessage = () => {
        sendMessage(message, username);
        setMessage("");
    };

    const getListMessage = async () => {
        if (!roomId) return;
        const { success, data } = await axiosGet(`${API.MESSAGE.LIST_MESSAGES}?room_id=${roomId}`);
        if (success) {
            setListMessage(data)
        }
    }

    console.log('listMessage', listMessage)

    useEffect(() => {
        if (roomId) {
            getListMessage()
        }
    }, [roomId]);

    return (
        <PrivateRoute>
            <div className={classes.background}>
                <List className={classes.messageList}>

                    {listMessage.map((msg, index) => (
                        <ListItem key={index} className={classes.otherMessage}>
                            <div className={classes.itemAvatar}>
                                <Avatar src={msg.sender.avatar} />
                            </div>
                            <ListItemText
                                primary={msg.sender.name}
                                secondary={msg.content}
                                className={classes.listItemText}
                            />
                        </ListItem>
                    ))}
                    {messages.map((msg, index) => (
                        <ListItem key={index} className={msg.isMe ? classes.myMessage : classes.otherMessage}>
                            {console.log('7777777', msg)}
                            <div className={classes.itemAvatar}>
                                <Avatar src={msg.avatar} />
                            </div>
                            <ListItemText
                                secondary={msg}
                                className={classes.listItemText}
                            />
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





