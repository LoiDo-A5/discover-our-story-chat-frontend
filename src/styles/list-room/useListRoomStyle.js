// styles/list-room/useListRoomStyle.ts
import { makeStyles } from "@mui/styles";
import Colors from "../../configs/Colors"; // Assuming Colors is defined and accessible

const useStyles = makeStyles((theme) => ({
  background: {
    "&.MuiContainer-root": {
      minHeight: "90vh", // Use minHeight to allow content to expand
      width: "100%",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center', // Center content horizontally
      paddingTop: theme.spacing(4), // Add some top padding
      paddingBottom: theme.spacing(4), // Add some bottom padding
      backgroundColor: Colors.Grey1, // A subtle background color for the container
    },
  },
  boxList: {
    width: "100%",
    maxWidth: 600, // Constrain max width for better readability on large screens
    backgroundColor: theme.palette.background.paper, // Use theme's paper background
    borderRadius: theme.shape.borderRadius * 2, // More pronounced rounded corners
    boxShadow: theme.shadows[3], // Add a medium shadow for depth
    padding: theme.spacing(2), // Inner padding for the list container
    paddingBottom: theme.spacing(3), // More padding at the bottom
    maxHeight: "calc(90vh - 180px)", // Adjusted height, consider header/footer if any
    overflowY: "auto",
    marginTop: theme.spacing(4), // Space below the title
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1), // Less padding on small screens
      maxWidth: '95%', // Adjust max width for mobile
    },
  },
  titleRoom: {
    marginTop: theme.spacing(8), // Use theme spacing, adjusted for visual balance
    marginBottom: theme.spacing(2), // Space below the title
    fontSize: '2.5rem', // Larger font size for impact
    fontWeight: "bold",
    color: theme.palette.primary.dark, // Use a primary color for the title
    textAlign: 'center', // Center the title
    textTransform: 'uppercase', // Make it uppercase
    letterSpacing: '0.05em', // Add some letter spacing
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem', // Adjust font size for mobile
      marginTop: theme.spacing(6),
    },
  },
  listItemStyle: {
    backgroundColor: theme.palette.background.default, // A slightly different background for items
    marginTop: theme.spacing(2), // Space between list items
    borderRadius: theme.spacing(1), // Rounded corners for each list item
    height: "70px",
    border: `1px solid ${Colors.Grey4}`, // Border color
    cursor: "pointer",
    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out', // Smooth transition for hover
    '&:hover': {
      transform: 'translateY(-3px)', // Lift effect on hover
      boxShadow: theme.shadows[6], // More pronounced shadow on hover
      backgroundColor: theme.palette.action.hover, // Subtle background change on hover
    },
    '&:first-child': {
      marginTop: 0, // No top margin for the first item
    },
  },
}));

export default useStyles;