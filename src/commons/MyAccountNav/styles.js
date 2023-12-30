import Colors from '@/configs/Colors';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles(() => ({
  wrapMyAccountNav: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 16,
  },
  wrapBoxUpload: {
    position: 'relative',
    cursor: 'pointer',

    '&:hover': {
      '& $iconCamera': {
        opacity: 1,
        transition: 'all 0.4s',
      },
      '& $overPlay': {
        opacity: 1.5,
        transition: 'all 0.4s',
      },
    },
  },
  avatar: {
    '&.MuiAvatar-root': {
      width: 120,
      height: 120,
    },
  },
  overPlay: {
    width: ' 100%',
    height: '100%',
    position: 'absolute',
    background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%)',
    top: 0,
    opacity: 0,
    borderRadius: '50%',
    zIndex: 1,
  },
  iconCamera: {
    color: Colors.White,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '2rem !important',
    height: '2rem !important',
    zIndex: 2,
    opacity: 0,
  },
  userName: {
    marginTop: 8,
  },
  userRole: {
    marginTop: 8,
    display: 'flex',
    alignItems: 'center',
  },
  iconDot: {
    margin: '0px 8px',
  },
  pointer: {
    cursor: 'pointer',
  },
  line: {
    height: 1,
    width: '100%',
    marginTop: 24,
    background: Colors.Gray19,
  },
  wrapBoxNav: {
    marginTop: 24,
    width: '100%',
  },
  menuItem: {
    '&.MuiMenuItem-root': {
      padding: '12px 16px',
      borderRadius: 8,
      marginTop: 8,
      color: `${Colors.Grey8} !important`,
    },
    '&:first-child': {
      marginTop: 0,
    },
  },
  menuItemActive: {
    '&.MuiMenuItem-root': {
      background: Colors.Secondary,
      color: `${Colors.Primary} !important`,
      fontWeight: 600,
    },
    '&.MuiMenuItem-root:hover': {
      background: Colors.Secondary,
    },
  },
  menuItemText: {
    fontWeight: 'inherit !important',
  },
  navIcon: {
    width: 24,
    height: 24,
    marginRight: 16,
    '&.MuiIcon-root': {
      width: 24,
      height: 24,
      marginRight: 16,
    },
  },
}));

export default useStyles;
