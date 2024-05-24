import { makeStyles } from "@mui/styles";
import Colors from "../../configs/Colors";

const useStyles = makeStyles(() => ({
  containerHeader: {
    // borderBottom: `1px solid ${Colors.Grey4}`,
    // padding: '25px 0px',
  },
  logoChatRoom: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    cursor:'pointer'
  },

  wrapHeader: {
    borderBottom: `1px solid ${Colors.Grey4}`,
    padding: "15px 0px",
  },
  row: {
    "&.MuiGrid-root": {
      justifyContent: "space-between",
      alignItems: "center",
    },
  },
  wrapHeaderLeft: {
    display: "flex",
    alignItems: "flex-end",
    cursor: "pointer",
  },
  wrapGroupItem: {
    display: "flex",
    alignItems: "center",
  },
  textItem: {
    padding: 12,
    fontWeight: 500,
    fontSize: 16,
    letterSpacing: 0.64,
    cursor: "pointer",
  },
  wrapButtonGroup: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonLogin: {
    "&.MuiButton-root": {
      width: 120,
      borderRadius: 20,
      marginRight: 12,
      marginLeft: 16,
    },
  },
  buttonSignUp: {
    "&.MuiButton-root": {
      width: 120,
      borderRadius: 20,
    },
  },
  avatarProfile: {
    "&.MuiAvatar-root": {
      width: 32,
      height: 32,
    },
  },
  wrapItemMenuProfile: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },

  avatarItemMenuProfile: {
    "&.MuiAvatar-root": {
      width: "80px !important",
      height: "80px !important",
      margin: "0 auto !important",
      marginTop: "8px !important",
    },
  },
  textUserName: {
    marginTop: 8,
    fontSize: "20px",
    fontWeight: 600,
    lineHeight: "30px",
    letterSpacing: "0.8px",
  },
  textEmail: {
    color: "var(--grey-8, #595959)",
    textAlign: "center",
    fontFamily: "NuOrder Trial",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "18px",
    letterSpacing: "0.48px",
    marginBottom: 12,
  },
  menuItem: {
    textTransform: "capitalize",
  },
  menuItemHelp: {
    "&.MuiMenuItem-root": {
      marginBottom: -7,
    },
  },
  menuPaper: {
    elevation: 0,
    overflow: "visible",
    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
    marginTop: 1.5,
    width: 300,
    "&:before": {
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      bgcolor: "background.paper",
      transform: "translateY(-50%) rotate(45deg)",
      zIndex: 0,
    },
  },
  footerItem: {
    paddingLeft: 16,
    color: Colors.Gray7,
  },
  logoPlatForm: {
    marginRight: 25,
  },
  logoPlatFormSmartPhone: {
    width: 110,
    height: 24,
    marginLeft: 16,
  },
  iconMenu: {
    "&.MuiSvgIcon-root": {
      width: 32,
      height: 32,
    },
  },
}));

export default useStyles;
