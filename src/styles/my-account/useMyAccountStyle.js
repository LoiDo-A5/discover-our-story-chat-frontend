import { makeStyles } from "@mui/styles";
import Colors from "../../configs/Colors";

const useStyles = makeStyles(() => ({
  wrapMyAccountPage: {
    paddingTop: 70,
    background: Colors.Grey1,
    minHeight: "100vh",
  },
  heading: {
    marginTop: 16,
    fontSize: 36,
    fontWeight: 600,
    color: Colors.Grey10,
    textTransform: "capitalize",
  },
  customContainer: {
    maxWidth: "none !important",
  },
}));

export default useStyles;
