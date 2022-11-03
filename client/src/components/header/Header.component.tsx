import React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Dialog, DialogContent, Tab, IconButton } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useTranslation } from 'react-i18next';
import { Close, Edit, Check } from '@mui/icons-material';

import { Tooltip } from '../tooltip/Tooltip.component';

import {
  Container,
  Group,
  Inner,
  Logo,
  ProjectTitle,
  ProjectTitleInput,
  SignIn,
  Run,
} from './styles/header.style';
import { FormSignIn, FormSignUp } from '../forms';
import { Snackbar } from '../snackbar/Snackbar.component';

interface InnerProps {
  children: React.ReactNode;
}

interface RunProps {
  onClick: () => void;
}

interface EditProps {
  value: string;
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

Header.ProjectTitle = function HeaderProjectTitleInput(props: EditProps) {
  const { value } = props;

  const { t } = useTranslation();

  const [title, setTitle] = React.useState(value);
  const [isReadOnly, setIsReadOnly] = React.useState(true);
  const [openAlert, setOpenAlert] = React.useState(false);

  const handleOpenAlert = () => {
    setOpenAlert(true);
  };

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value.trim());
  };

  const toggleInputSelect = () => {
    setIsReadOnly((prev) => !prev);

    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleEditConfirm = () => {
    toggleInputSelect();
    handleOpenAlert();
  };

  return (
    <>
      <Snackbar
        openAlert={openAlert}
        handleCloseAlert={handleCloseAlert}
        alertText={t('header.projectName.alert')}
      />
      <ProjectTitle>
        <ProjectTitleInput
          ref={inputRef}
          value={title}
          readOnly={isReadOnly}
          onChange={(e) => handleTitleChange(e)}
        />
        {isReadOnly ? (
          <Tooltip title={t('tooltips.header.projectName.edit')}>
            <IconButton
              aria-label="edit"
              onClick={toggleInputSelect}
              sx={{
                position: 'absolute',
                left: 0,
                padding: '5px',
                '& svg': {
                  fontSize: '20px',
                },
              }}
            >
              <Edit />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title={t('tooltips.header.projectName.save')}>
            <IconButton
              aria-label="confirm edit"
              onClick={handleEditConfirm}
              sx={{
                position: 'absolute',
                left: 0,
                padding: '5px',
                '& svg': {
                  fontSize: '20px',
                  color: 'common.green.primary',
                },
              }}
            >
              <Check />
            </IconButton>
          </Tooltip>
        )}
      </ProjectTitle>
    </>
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
              <FormSignIn />
            </TabPanel>
            <TabPanel value="Sign Up">
              <FormSignUp />
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
