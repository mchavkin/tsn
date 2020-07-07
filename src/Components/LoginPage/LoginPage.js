import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import { connect } from 'react-redux';
import logo from '../../resources/images/logo-white.svg';
import wave from '../../resources/images/wave.svg';
import { login } from '../../redux/actions';
import LoginInput from './LoginInput';

const useStyles = makeStyles((theme) => ({
  loginBackground: {
    position: 'absolute',
    backgroundColor: '#0b0f27',
    backgroundImage: `url(${wave})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  },
  paper: {
    marginLeft: '18px',
    marginRight: '18px',
    marginTop: '15vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    margin: theme.spacing(5),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(2, 0),
    backgroundColor: '#9fd533',
    '&:hover': {
      backgroundColor: '#86b300',
    },
    height: '56px',
    fontWeight: '700',
  },
}));

function LoginPage(props) {
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    props.login({ username, password });
  };

  return (
    <div className={classes.loginBackground}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <img src={logo} alt="testio." className={classes.logo} />
          <form className={classes.form} onSubmit={onSubmit}>
            <LoginInput
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              id="username"
              placeholder="Username"
              autoFocus
              icon={PersonIcon}
              data-testid="username"
            />
            <LoginInput
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              id="password"
              placeholder="Password"
              icon={LockIcon}
              data-testid="password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={props.disabled}
              data-testid="login-button"
            >
              Log In
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => ({ disabled: state.loading });

export default connect(mapStateToProps, { login })(LoginPage);
