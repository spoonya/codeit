import React from 'react';
import styled from 'styled-components/macro';

interface TInner {
  children: React.ReactNode;
}

const Inner = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  height: calc(100vh - 42px);
`;

export default function Container(props: TInner) {
  const { children } = props;

  return <Inner>{children}</Inner>;
}
