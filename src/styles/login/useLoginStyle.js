import { makeStyles } from "@mui/styles";

import Colors from "../../configs/Colors";

const useStyles = makeStyles(() => ({
  background: {
    "&.MuiContainer-root": {
      height: "97vh",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  wrapLogo: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logoChatRoom: {
    maxWidth: 300,
    maxHeight: 300,
  },
  title: {
    width: "100%",
    textAlign: "center",
    fontSize: 32,
    color: Colors.Blue19,
  },
}));

export default useStyles;
