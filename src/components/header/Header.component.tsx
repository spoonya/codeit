import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Dialog, DialogContent, DialogActions, Button, Tab } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Container, Group, Inner, Logo, ProjectTitle, SignIn, Run } from './styles/header.style';

interface InnerProps {
  children: React.ReactNode;
}

interface RunProps {
  btnLabel: string;
  onClick: () => void;
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

Header.SignIn = function HeaderSignIn() {
  const { t } = useTranslation();

  const [open, setOpen] = React.useState(false);
  const [tab, setTab] = React.useState('1');

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
            <TabList onChange={handleChange} aria-label="forms">
              <Tab label="Sign In" value="1" />
              <Tab label="Sign Up" value="2" />
            </TabList>
            <TabPanel value="1">Item One</TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
          </TabContext>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleCloseModal}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

Header.Run = function HeaderRun(props: RunProps) {
  const { btnLabel, onClick } = props;

  return (
    <Run onClick={onClick} variant="contained" startIcon={<PlayArrowIcon sx={{ fontSize: 30 }} />}>
      {btnLabel}
    </Run>
  );
};
