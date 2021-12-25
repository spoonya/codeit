import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import React from 'react';

import { Container, Group, Inner, Logo, ProjectTitle, SignIn, Run } from './styles/header.style';

interface TInner {
  children: React.ReactNode;
}

interface TRun {
  btnLabel: string;
  disabled: boolean;
  onClick: () => void;
}

export default function Header(props: TInner) {
  const { children } = props;

  return (
    <Container>
      <Inner>{children}</Inner>
    </Container>
  );
}

Header.Group = function HeaderGroup(props: TInner) {
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

Header.ProjectTitle = function HeaderProjectTitle(props: TInner) {
  const { children } = props;

  return <ProjectTitle>{children}</ProjectTitle>;
};

Header.SignIn = function HeaderSignIn(props: TInner) {
  const { children } = props;

  return <SignIn>{children}</SignIn>;
};

Header.Run = function HeaderRun(props: TRun) {
  const { btnLabel, onClick, disabled } = props;

  return (
    <Run
      onClick={onClick}
      disabled={disabled}
      variant="contained"
      startIcon={<PlayArrowIcon sx={{ fontSize: 30 }} />}
    >
      {btnLabel}
    </Run>
  );
};
