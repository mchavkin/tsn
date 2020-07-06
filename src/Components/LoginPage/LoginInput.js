import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  inputBgd: {
    backgroundColor: 'white',
    color: '#999',
  },
}));

export default function LoginInput(props) {
  const classes = useStyles();
  const { icon: InputIcon, ...restProps } = props;
  return (
    <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      InputProps={{
        classes: {
          root: classes.inputBgd,
        },
        startAdornment: (
          <InputAdornment position="start">
            <InputIcon color="action" />
          </InputAdornment>
        ),
      }}
      {...restProps}
    />
  );
}
