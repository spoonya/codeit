/* eslint-disable react/jsx-wrap-multilines */
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import {
  Dialog,
  DialogContent,
  Button,
  Tab,
  TextField,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { VisibilityOff, Visibility, Close } from '@mui/icons-material';

import {
  Container,
  Group,
  Inner,
  Logo,
  ProjectTitle,
  Form,
  SignIn,
  Run,
} from './styles/header.style';

interface InnerProps {
  children: React.ReactNode;
}

interface RunProps {
  onClick: () => void;
}

interface InputAdornmentState {
  password: string;
  showPassword: boolean;
}

export function Header(props: InnerProps) {
  const { children } = props;

  return (
    <Container>
      <Inner>{children}</Inner>
    </Container>
  );
}

Header.Group = function HeaderGroup(props: InnerProps) {
  const { children } = props;

  return <Group>{children}</Group>;
};

Header.Logo = function HeaderLogo() {
  return (
    <Logo>
      code.
      <span>it</span>
    </Logo>
  );
};

Header.ProjectTitle = function HeaderProjectTitle(props: InnerProps) {
  const { children } = props;

  return <ProjectTitle>{children}</ProjectTitle>;
};

Header.FormSignUp = function HeaderFormSignUp() {
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
};

Header.FormSignIn = function HeaderFormSignIn() {
  const { t } = useTranslation();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState<InputAdornmentState>({
    password: '',
    showPassword: false,
  });
  const [emailError, setEmailError] = React.useState(' ');
  const [passwordError, setPasswordError] = React.useState(' ');
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
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  return (
    <Form action="#">
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
        {t('form.signInBtn')}
      </Button>
    </Form>
  );
};

Header.SignIn = function HeaderSignIn() {
  const { t } = useTranslation();

  const [open, setOpen] = React.useState(false);
  const [tab, setTab] = React.useState('Sign In');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
  };

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <>
      <SignIn onClick={handleOpenModal}>{t('header.signIn')}</SignIn>
      <Dialog
        open={open}
        onClose={handleCloseModal}
        sx={{
          '& .MuiPaper-root': {
            backgroundColor: 'background.modal',
          },
        }}
      >
        <DialogContent>
          <TabContext value={tab}>
            <TabList onChange={handleChange} aria-label="forms" centered>
              <Tab label={t('form.signIn')} value="Sign In" />
              <Tab label={t('form.signUp')} value="Sign Up" />
            </TabList>
            <TabPanel value="Sign In">
              <Header.FormSignIn />
            </TabPanel>
            <TabPanel value="Sign Up">
              <Header.FormSignUp />
            </TabPanel>
          </TabContext>
        </DialogContent>
        <IconButton
          aria-label="close"
          onClick={handleCloseModal}
          sx={{
            position: 'absolute',
            right: 8,
            top: 15,
            '& svg': {
              fontSize: '20px',
            },
          }}
        >
          <Close />
        </IconButton>
      </Dialog>
    </>
  );
};

Header.Run = function HeaderRun(props: RunProps) {
  const { onClick } = props;

  const { t } = useTranslation();

  return (
    <Run onClick={onClick} variant="contained" startIcon={<PlayArrowIcon sx={{ fontSize: 30 }} />}>
      {t('header.run')}
    </Run>
  );
};
