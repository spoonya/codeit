import React from 'react';
import { LogsAction } from '../../store/reducers/logs/logs.type';

import { Clear, Container, Content, Header, Title } from './styles/console.style';

interface TInner {
  children: React.ReactNode;
}

interface TClear {
  children: React.ReactNode;
  onClick: () => LogsAction;
}

export default function Console(props: TInner) {
  const { children } = props;

  return <Container>{children}</Container>;
}

Console.Header = function ConsoleHeader(props: TInner) {
  const { children } = props;

  return <Header>{children}</Header>;
};

Console.Content = function ConsoleContent(props: TInner) {
  const { children } = props;

  return <Content>{children}</Content>;
};

Console.Title = function ConsoleTitle(props: TInner) {
  const { children } = props;

  return <Title>{children}</Title>;
};

Console.Clear = function ConsoleClear(props: TClear) {
  const { children, onClick } = props;

  return <Clear onClick={onClick}>{children}</Clear>;
};
