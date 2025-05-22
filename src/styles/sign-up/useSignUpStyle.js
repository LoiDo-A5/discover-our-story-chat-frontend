import { makeStyles } from "@mui/styles";
import backgroundImage from "../../images/background.png";
import Colors from "../../configs/Colors";

const useStyles = makeStyles((theme) => ({
  background: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundImage: `url(${backgroundImage.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
  },
  form: {
    width: "100%",
    maxWidth: "400px",
    padding: "20px",
    borderRadius: "8px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },
  title: {
    margin: theme.spacing(1),
    color: Colors.Blue19,
    textAlign: "center",
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
  signupLink: {
    marginTop: theme.spacing(2),
    textAlign: "center",
    cursor: "pointer",
    color: theme.palette.primary.main,
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: theme.spacing(2),
  },
  logo: {
    width: "100px",
    height: "100px",
  },
}));

export default useStyles;
