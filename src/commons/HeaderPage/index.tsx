import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Avatar, Box, Divider, IconButton, Menu, MenuItem, Tooltip } from '@mui/material';
import Image from 'next/image';
import Logo from "../../images/logo.png";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/reducer/authSlice';
import { useRouter } from 'next/router';
import Routes from '../../utils/Route';
import useStyles from './styles';
import { RootState } from '@/utils/types';
import FriendShipLogo from "../../images/friendship.png";

const HeaderPage: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state: RootState) => state.auth.account.user);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isClient, setIsClient] = useState(false);

  const open = Boolean(anchorEl);

  const handleLogOut = () => {
    setAnchorEl(null);
    dispatch(logout());
    router.push(Routes.Login);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickMyAccount = () => {
    router.push(Routes.MyAccount);
  };

  const goHome = () => {
    router.push(Routes.Home);
  }

  const goFriendShip = () => {
    router.push(Routes.Friendship(user?.id))
  }

  useEffect(() => {
    setIsClient(true);
  }, []);



  return (
    <div className={classes.containerHeader}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Image
              onClick={goHome}
              src={Logo}
              alt=""
              className={classes.logoChatRoom}
              style={{ marginRight: '20px' }}
            />
            <Image
              onClick={goFriendShip}
              src={FriendShipLogo}
              alt=""
              className={classes.logoChatRoom}
              style={{ marginRight: '20px' }}
            />
            <div onClick={goFriendShip} className={classes.textFriendShip}>Add Friend Here</div>
          </Typography>
          <div>
            <Box>
              <Tooltip title={'Account setting'}>
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                >
                  <Avatar
                    className={classes.avatarProfile}
                    src={isClient ? user?.avatar : undefined}
                  />
                </IconButton>
              </Tooltip>
            </Box>

            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              classes={{
                paper: classes.menuPaper,
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <div className={classes.wrapItemMenuProfile}>
                <div >
                  <Avatar
                    className={classes.avatarProfile}
                    src={isClient ? user?.avatar : undefined}
                  />
                  <div>
                    <div className={classes.textUserName}>{user?.name}</div>
                    <div className={classes.textEmail}>{user?.email}</div>
                  </div>
                </div>
              </div>

              <Divider />
              <MenuItem onClick={handleClickMyAccount}>{'My account'}</MenuItem>
              <MenuItem
                onClick={handleClose}
                className={classes.menuItemHelp}
              >
                {'Help'}
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleLogOut}>{'Sign out'}</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default HeaderPage;
