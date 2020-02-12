import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';
import {AppBar,Toolbar,Typography,Button,IconButton,MenuIcon,makeStyles} from '@material-ui/core';
import Brain from '../images/Braintu.png';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const  Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>

              <img src={Brain} alt="logo" width = "29" className = "menu" to='/' component={Link} />  <br/>      
          <Typography variant="h6" className={classes.title}>
            ThinkTest
          </Typography>
          <Button color="inherit" to='/' component={Link}>HOME</Button>
          <Button color="inherit" to='/about' component={Link}>ABOUT</Button>
        </Toolbar>
      </AppBar>
    </div>
  );

}
export default Navbar;