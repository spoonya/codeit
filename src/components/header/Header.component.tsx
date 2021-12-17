import React from 'react';

import { Container, Group, Inner, Logo, ProjectTitle, SignIn } from './styles/header.style';
import * as THeader from './types/header.type';

export default function Header(props: THeader.Inner): JSX.Element {
  const { children } = props;

  return (
    <Container>
      <Inner>{children}</Inner>
    </Container>
  );
}

Header.Group = function HeaderGroup(props: THeader.Inner): JSX.Element {
  const { children } = props;

  return <Group>{children}</Group>;
};

Header.Logo = function HeaderLogo(): JSX.Element {
  return (
    <Logo>
      code.
      <span>it</span>
    </Logo>
  );
};

Header.ProjectTitle = function HeaderProjectTitle(props: THeader.Inner): JSX.Element {
  const { children } = props;

  return <ProjectTitle>{children}</ProjectTitle>;
};

Header.SignIn = function HeaderSignIn(props: THeader.Inner): JSX.Element {
  const { children } = props;

  return <SignIn>{children}</SignIn>;
};
