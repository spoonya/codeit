import React from 'react';

import { Container } from './styles/header.style';

export default function Header(props: any) {
  const { children } = props;

  return <Container>{children}</Container>;
}

Header.Logo = function HeaderLogo(props: any) {
  return <h1>Logo</h1>;
};
