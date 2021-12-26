import React from 'react';
import { useTranslation } from 'react-i18next';

import { Header } from '../components';

interface HeaderProps {
  srcDoc: string;
  setSrcDoc: (value: string) => void;
}

export function HeaderContainer(props: HeaderProps) {
  const { srcDoc, setSrcDoc } = props;

  const { t } = useTranslation();

  const handleClick = () => {
    setSrcDoc('');

    setTimeout(() => {
      setSrcDoc(srcDoc);
    }, 1000);
  };

  return (
    <Header>
      <Header.Group>
        <Header.Logo />
        <Header.ProjectTitle>Project</Header.ProjectTitle>
      </Header.Group>
      <Header.Run btnLabel={t('header.run')} onClick={handleClick} />
      <Header.SignIn>{t('header.signIn')}</Header.SignIn>
    </Header>
  );
}
