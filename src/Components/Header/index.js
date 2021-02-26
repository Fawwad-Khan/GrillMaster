import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import styles from './styles'
const useStyles = makeStyles(styles);

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.header} elevation={0}>
      <Toolbar>
        <Typography variant="h6" className={classes.logo}>
          Grillmaster
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
