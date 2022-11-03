import { useTranslation } from 'react-i18next';
import React from 'react';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import { TextField, InputAdornment, IconButton, Button } from '@mui/material';

import { Form } from '../header/styles/header.style';

interface InputAdornmentState {
  value: string;
  showPassword: boolean;
}

export function FormSignIn() {
  const { t } = useTranslation();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState<InputAdornmentState>({
    value: '',
    showPassword: false,
  });
  const [emailError, setEmailError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
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
    if (!password.value || passwordError || !email || emailError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError, email, password]);

  return (
    <Form action="#">
      <TextField
        name="email"
        type="email"
        id="sign-in-email"
        helperText={emailError}
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
        helperText={passwordError}
        label={t('form.password')}
        variant="standard"
        value={password.value}
        onChange={handleOnChangePassword('value')}
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
        {t('form.signInBtn')}
      </Button>
    </Form>
  );
}
