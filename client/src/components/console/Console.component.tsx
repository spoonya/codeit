import React from 'react';
import { LogsAction } from '../../store/reducers/logs/logs.type';

import { Clear, Container, Content, Header, Title } from './styles/console.style';

interface InnerProps {
  children: React.ReactNode;
}

interface ClearProps {
  children: React.ReactNode;
  onClick: () => LogsAction;
}

export function Console(props: InnerProps) {
  const { children } = props;

  return <Container>{children}</Container>;
}

Console.Header = function ConsoleHeader(props: InnerProps) {
  const { children } = props;

  return <Header>{children}</Header>;
};

Console.Content = function ConsoleContent(props: InnerProps) {
  const { children } = props;

  return <Content>{children}</Content>;
};

Console.Title = function ConsoleTitle(props: InnerProps) {
  const { children } = props;

  return <Title>{children}</Title>;
};

Console.Clear = function ConsoleClear(props: ClearProps) {
  const { children, onClick } = props;

  return <Clear onClick={onClick}>{children}</Clear>;
};
