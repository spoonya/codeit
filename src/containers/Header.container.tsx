import React from 'react';
import { useTranslation } from 'react-i18next';

import { Header } from '../components';

interface HeaderProps {
  srcDoc: string;
  isRunDisabled: boolean;
  setSrcDoc: (value: string) => void;
}

export function HeaderContainer(props: HeaderProps) {
  const { srcDoc, setSrcDoc, isRunDisabled } = props;

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
      <Header.Run disabled={isRunDisabled} btnLabel={t('header.run')} onClick={handleClick} />
      <Header.SignIn>{t('header.signIn')}</Header.SignIn>
    </Header>
  );
}
