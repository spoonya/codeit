import { useTranslation } from 'react-i18next';
import React from 'react';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import { TextField, InputAdornment, IconButton, Button } from '@mui/material';

import { Form } from '../header/styles/header.style';

interface InputAdornmentState {
  password: string;
  showPassword: boolean;
}

export function FormSignUp() {
  const { t } = useTranslation();

  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState<InputAdornmentState>({
    password: '',
    showPassword: false,
  });
  const [usernameError, setUsernameError] = React.useState(' ');
  const [emailError, setEmailError] = React.useState(' ');
  const [passwordError, setPasswordError] = React.useState(' ');
  const [usernameDirty, setUsernameDirty] = React.useState(false);
  const [emailDirty, setEmailDirty] = React.useState(false);
  const [passwordDirty, setPasswordDirty] = React.useState(false);
  const [formValid, setFormValid] = React.useState(false);

  const handleClickShowPassword = () => {
    setPassword({
      ...password,
      showPassword: !password.showPassword,
    });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    switch (event.target.name) {
      case 'username':
        setUsernameDirty(true);
        break;
      case 'email':
        setEmailDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
        break;

      default:
        break;
    }
  };

  const handleOnChangeUsername = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setUsername(event.target.value.trim());

    if (!event.target.value.trim()) {
      setUsernameError(t('form.errors.emptyUsername'));

      return;
    }

    if (event.target.value.trim().length < 2) {
      setUsernameError(t('form.errors.invalidUsername'));

      return;
    }

    setUsernameError('');
  };

  const handleOnChangeEmail = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setEmail(event.target.value.trim());

    const regex =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

    if (!event.target.value.trim()) {
      setEmailError(t('form.errors.emptyEmail'));

      return;
    }

    if (!regex.test(String(event.target.value.trim()).toLowerCase())) {
      setEmailError(t('form.errors.invalidEmail'));

      return;
    }

    setEmailError('');
  };

  const handleOnChangePassword =
    (prop: keyof InputAdornmentState) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword({ ...password, [prop]: event.target.value.trim() });

      if (!event.target.value.trim()) {
        setPasswordError(t('form.errors.emptyPassword'));

        return;
      }

      if (event.target.value.trim().length < 6) {
        setPasswordError(t('form.errors.invalidPassword'));

        return;
      }

      setPasswordError('');
    };

  React.useEffect(() => {
    if (usernameError || emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [usernameError, emailError, passwordError]);

  return (
    <Form action="#">
      <TextField
        name="username"
        type="text"
        id="sign-in-username"
        label={t('form.username')}
        variant="standard"
        helperText={usernameError === ' ' ? null : usernameError}
        value={username}
        onChange={(e) => handleOnChangeUsername(e)}
        error={usernameDirty && !!usernameError}
        onBlur={(e) => handleBlur(e)}
      />
      <TextField
        name="email"
        type="email"
        id="sign-in-email"
        helperText={emailError === ' ' ? null : emailError}
        label={t('form.email')}
        variant="standard"
        value={email}
        onChange={(e) => handleOnChangeEmail(e)}
        error={emailDirty && !!emailError}
        onBlur={(e) => handleBlur(e)}
      />
      <TextField
        name="password"
        type={password.showPassword ? 'text' : 'password'}
        id="sign-in-password"
        helperText={passwordError === ' ' ? null : passwordError}
        label={t('form.password')}
        variant="standard"
        value={password.password}
        onChange={handleOnChangePassword('password')}
        error={passwordDirty && !!passwordError}
        onBlur={(e) => handleBlur(e)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {password.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Button type="submit" variant="contained" disabled={!formValid}>
        {t('form.signUpBtn')}
      </Button>
    </Form>
  );
}
