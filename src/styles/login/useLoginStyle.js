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
}));

export default useStyles;
