import { makeStyles } from '@mui/styles';

import Colors from '../../configs/Colors';

const useStyles = makeStyles(() => ({
  headerWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 8,
  },
  subHeaderTextLink: {
    textDecoration: 'none',
    marginLeft: 8,
    color: Colors.Blue6,
    marginBottom: 1,
  },
  textHeader: {
    whiteSpace: 'nowrap',
  },
}));

export default useStyles;
