import { makeStyles } from "@mui/styles";

import Colors from "../../configs/Colors";

const useStyles = makeStyles((theme) => ({
  background: {
    "&.MuiContainer-root": {
      height: "90vh",
      width: "100%",
    },
  },
  boxList: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${Colors.Grey4}`,
    paddingBottom: 25,
    maxHeight: "calc(90vh - 150px)", // Chiều cao tối đa của danh sách
    overflowY: "auto", // Kích hoạt thanh cuộn nếu danh sách quá dài
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
