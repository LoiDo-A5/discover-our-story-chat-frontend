import React, { useState, useEffect } from "react";
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
  addFriend = () => { },
}) => {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

  const friendIds = new Set(friends.map((friend) => friend.id));

  useEffect(() => {
    const lowercasedSearchTerm = searchTerm.toLowerCase();
    const results = users.filter(user =>
      user.name?.toLowerCase().includes(lowercasedSearchTerm) ||
      user.email?.toLowerCase().includes(lowercasedSearchTerm)
    );
    setFilteredUsers(results);
  }, [users, searchTerm]);


  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className={classes.background}>
      <Container className={classes.container}>
        <Typography variant="h6" gutterBottom>
          Search Users
        </Typography>
        <div className={classes.searchBar}>
          <TextField
            placeholder="Search by name or email"
            fullWidth
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className={classes.searchResults}>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => {
              const isFriend = friendIds.has(user.id);
              // Only check if already a friend, not pending sent requests here
              const isDisabled = isFriend;
              let buttonText = "Add Friend";
              if (isFriend) {
                buttonText = "Friend";
              }

              return (
                <div key={user.id} className={classes.userCard}>
                  <Avatar
                    className={classes.avatar}
                    src={user?.avatar || ''}
                    alt={user.name || 'User Avatar'}
                  />
                  <div className={classes.userName}>{user.name}</div>
                  <Button
                    variant="contained"
                    className={classes.addButton}
                    onClick={() => addFriend(user.id)}
                    disabled={isDisabled}
                  >
                    {buttonText}
                  </Button>
                </div>
              );
            })
          ) : (
            <Typography variant="body1" align="center">
              No users found.
            </Typography>
          )}
        </div>
      </Container>
    </div>
  );
};

export default ListUser;