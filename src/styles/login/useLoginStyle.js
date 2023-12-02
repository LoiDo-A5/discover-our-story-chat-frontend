import { makeStyles } from "@mui/styles";

import Colors from "../../configs/Colors";

const useStyles = makeStyles(() => ({
  background: {
    "&.MuiContainer-root": {
      maxWidth: "83% !important",
      height: "95vh",
      width: "100%",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "red",
    },
  },
}));

export default useStyles;
