import React from 'react';
import { useTranslation } from 'react-i18next';

import Header from '../components/header/Header.component';

export default function HeaderContainer() {
  const { t } = useTranslation();

  return (
    <Header>
      <Header.Group>
        <Header.Logo />
        <Header.ProjectTitle>Project</Header.ProjectTitle>
      </Header.Group>
      <Header.SignIn>{t('header.signIn')}</Header.SignIn>
    </Header>
  );
}
