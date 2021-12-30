import React from 'react';
import { useTranslation } from 'react-i18next';

import { Header } from '../components';
import { RUN_DELAY } from '../constants';

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
    }, RUN_DELAY);
  };

  return (
    <Header>
      <Header.Group>
        <Header.Logo />
        <Header.ProjectTitle>Project</Header.ProjectTitle>
      </Header.Group>
      <Header.Run btnLabel={t('header.run')} onClick={handleClick} />
      <Header.SignIn />
    </Header>
  );
}
