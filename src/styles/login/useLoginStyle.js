import { makeStyles } from "@mui/styles";

import Colors from "../../configs/Colors";

const useStyles = makeStyles((theme) => ({
  background: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
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
  signupLink: {
    marginTop: 16,
    display: "flex",
    justifyContent: "flex-end",
    cursor: "pointer",
  },
  boxList: {
    width: "100%",
    backgroundColor: '#ffffff',
    border: `1px solid ${Colors.Grey4}`,
    paddingBottom: 25,
  },
  titleRoom: {
    marginTop: 100,
    fontSize: 32,
    fontWeight: "bold",
  },
  listItemStyle: {
    backgroundColor: "#e1f5fe",
    marginTop: 16,
    height: "70px",
    border: `1px solid ${Colors.Grey4}`,
    cursor: "pointer",
  },
}));

export default useStyles;
