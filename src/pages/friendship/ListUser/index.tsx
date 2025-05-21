import React from "react";
import { Button, TextField, Typography, Container, Avatar } from "@mui/material";
import useStyles from '@/styles/friendship/useFriendshipStyle';
import { User } from "@/utils/types";

interface ListUserProps {
  users?: User[];
  friends?: User[];
  addFriend?: (id: string) => void;
}

const ListUser: React.FC<ListUserProps> = ({
  users = [],
  friends = [],
  addFriend = () => {},
}) => {
  const classes = useStyles();

  const friendIds = friends.map((friend) => friend.id);

  return (
    <div className={classes.background}>
      <Container className={classes.container}>
        <Typography variant="h6" gutterBottom>
          Search Users
        </Typography>
        <div className={classes.searchBar}>
          <TextField placeholder="Search by name or email" fullWidth />
          <Button className={classes.buttonSearch} variant="contained">Search</Button>
        </div>

        <div className={classes.searchResults}>
          {users.map((user) => (
            <div key={user.id} className={classes.userCard}>
              <Avatar
                className={classes.avatar}
                src={user?.avatar}
              />
              <div className={classes.userName}>{user.name}</div>
              <Button
                variant="contained"
                className={classes.addButton}
                onClick={() => addFriend(user.id)}
                disabled={friendIds.includes(user.id)}
              >
                {friendIds.includes(user.id) ? "Friend" : "Add Friend"}
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ListUser;
