import React from 'react';

import { Container, Content, Header, Title } from './styles/console.style';

interface TInner {
  children?: React.ReactNode;
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
