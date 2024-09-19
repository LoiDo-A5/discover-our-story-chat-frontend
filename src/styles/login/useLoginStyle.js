import { makeStyles } from "@mui/styles";
import Colors from "../../configs/Colors";
import backgroundImage from "../../images/background.png";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `url(${backgroundImage.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadius,
    width: "100%",
    maxWidth: 400,
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
  title: {
    margin: theme.spacing(1),
    color: Colors.Blue19,
    textAlign: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  signupLink: {
    display: "flex",
    justifyContent: "center",
    cursor: "pointer",
  },
}));

export default useStyles;
