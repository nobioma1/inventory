import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    textDecoration: 'none',
    color: '#3f51b5',
  },
  logoName: {
    textDecoration: 'none',
    fontFamily: 'Literata',
    color: 'black'
  },
  dropdown: {
    position: 'relative',
  },
  paper: {
    position: 'absolute',
    top: 36,
    right: 0,
    left: 0,
    padding: '5px',
  },
  dropdownItems: {
    height: theme.spacing(1),
    textDecoration: 'none',
    color: 'black',
  },
  initials: {
    width: '70px',
  },
}));