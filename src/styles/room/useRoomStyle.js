import { makeStyles } from "@mui/styles";

import Colors from "../../configs/Colors";

const useStyles = makeStyles((theme) => ({
  background: {
    "&.MuiContainer-root": {
      height: "90vh",
      width: "100%",
      marginTop: 100,
    },
  },
}));

export default useStyles;
