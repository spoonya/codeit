import React from 'react';

import { Header } from '../components';
import { RUN_DELAY } from '../constants';

interface HeaderProps {
  srcDoc: string;
  setSrcDoc: (value: string) => void;
}

export function HeaderContainer(props: HeaderProps) {
  const { srcDoc, setSrcDoc } = props;

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
        <Header.ProjectTitle value="Project 1" />
      </Header.Group>
      <Header.Run onClick={handleClick} />
      <Header.SignIn />
    </Header>
  );
}
