import { makeStyles } from "@mui/styles";
import backgroundImage from "../../images/background.png";

const useStyles = makeStyles((theme) => ({
  background: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: "100vh",
    backgroundImage: `url(${backgroundImage.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
  },
  form: {
    width: '100%',
    maxWidth: '400px',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  title: {
    marginBottom: theme.spacing(2),
    textAlign: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
  signupLink: {
    marginTop: theme.spacing(2),
    textAlign: 'center',
    cursor: 'pointer',
    color: theme.palette.primary.main,
  },
}));

export default useStyles;
