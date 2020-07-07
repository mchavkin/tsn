import React from 'react';
import { Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Icon from '@material-ui/core/Icon';
import { logout } from '../../redux/actions';
import logoutIcon from '../../resources/images/logoutIcon.svg';
import logo from '../../resources/images/logo-black.svg';

const useStyles = makeStyles((theme) => ({
  logo: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    flexGrow: 1,
  },
  logoutButton: {
    textTransform: 'unset',
    '&:hover': {
      border: '1px solid #99cc33',
      backgroundColor: 'unset',
    },
  },
}));

function Servers(props) {
  const classes = useStyles();

  return (
    <AppBar position="sticky" color="inherit">
      <Toolbar>
        <div className={classes.logo}>
          <img src={logo} alt="testio." />
        </div>
        <Button
          variant="outlined"
          className={classes.logoutButton}
          onClick={props.logout}
          startIcon={<Icon><img src={logoutIcon} alt="<-" /></Icon>}
          data-testid="logout-button"
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default connect(null, { logout })(Servers);
