import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import React from 'react';

import { Container, Group, Inner, Logo, ProjectTitle, SignIn, Run } from './styles/header.style';

interface InnerProps {
  children: React.ReactNode;
}

interface RunProps {
  btnLabel: string;
  disabled: boolean;
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

Header.SignIn = function HeaderSignIn(props: InnerProps) {
  const { children } = props;

  return <SignIn>{children}</SignIn>;
};

Header.Run = function HeaderRun(props: RunProps) {
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
