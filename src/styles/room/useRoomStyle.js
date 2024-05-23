import { makeStyles } from "@mui/styles";

import Colors from "../../configs/Colors";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: "#f2f2f2",
    height: "85.9vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    padding: "20px",
  },
  messageList: {
    maxHeight: "calc(100vh - 200px)",
    overflowY: "auto",
    padding: 0,
  },
  myMessage: {
    background: "#DCF8C6",
    borderRadius: "20px",
    padding: "8px 12px",
    alignSelf: "flex-end",
    marginBottom: "20px",
  },
  otherMessage: {
    background: "#FFFFFF",
    borderRadius: "20px",
    padding: "8px 12px",
    alignSelf: "flex-start",
    marginBottom: "20px",
  },
  listItemText: {
    wordWrap: "break-word",
  },
}));

export default useStyles;
