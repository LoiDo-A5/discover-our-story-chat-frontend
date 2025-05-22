// styles/list-room/useListRoomStyle.ts
import { makeStyles } from "@mui/styles";
import Colors from "../../configs/Colors";
import backgroundImage from "../../images/background.png";

const useStyles = makeStyles((theme) => ({
  fullPageBackground: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',   
    minHeight: "100vh",     
    width: "100%",          
    backgroundImage: `url(${backgroundImage.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },

  contentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 
    backgroundColor: 'rgba(255, 255, 255, 0.85)', 
    borderRadius: theme.shape.borderRadius * 3, 
    boxShadow: theme.shadows[8], 
    padding: theme.spacing(4), 
    width: 'auto', 
    maxWidth: '90%', 
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2),
      borderRadius: theme.shape.borderRadius * 2,
      maxWidth: '95%',
    },
  },
  titleRoom: {
    marginTop: theme.spacing(2), 
    marginBottom: theme.spacing(4),
    fontSize: '2.5rem',
    fontWeight: "bold",
    color: theme.palette.primary.dark,
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem',
      marginTop: theme.spacing(2), 
      marginBottom: theme.spacing(3),
    },
  },
  boxList: {
    width: "60vw", 
    maxWidth: 800,
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius * 2,
    boxShadow: theme.shadows[3],
    padding: theme.spacing(2),
    paddingBottom: theme.spacing(3),
    maxHeight: "calc(100vh - 250px)", 
    overflowY: "auto",
    [theme.breakpoints.down('md')]: {
      width: "80vw", 
      padding: theme.spacing(1.5),
    },
    [theme.breakpoints.down('sm')]: {
      width: "95vw",
      padding: theme.spacing(1),
      maxHeight: "calc(100vh - 200px)",
    },
  },
  listItemStyle: {
    backgroundColor: theme.palette.background.default,
    marginTop: theme.spacing(2),
    borderRadius: theme.spacing(1),
    height: "70px",
    border: `1px solid ${Colors.Grey4}`,
    cursor: "pointer",
    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
    '&:hover': {
      transform: "translateY(-3px)",
      boxShadow: theme.shadows[6],
      backgroundColor: theme.palette.action.hover,
    },
    '&:first-child': {
      marginTop: 0,
    },
  },
}));

export default useStyles;