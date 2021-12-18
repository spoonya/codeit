import React from 'react';

import Header from '../components/header/Header.component';

export default function HeaderContainer() {
  return (
    <Header>
      <Header.Group>
        <Header.Logo />
        <Header.ProjectTitle>Project</Header.ProjectTitle>
      </Header.Group>
      <Header.SignIn>Sign In</Header.SignIn>
    </Header>
  );
}
