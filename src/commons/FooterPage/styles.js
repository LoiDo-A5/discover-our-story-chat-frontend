import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    padding: theme.spacing(1, 0),
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  bottomText: {
    marginTop: theme.spacing(2),
  },
}));

export default useStyles;
