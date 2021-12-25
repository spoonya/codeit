import React from 'react';
import styled from 'styled-components/macro';

interface InnerProps {
  children: React.ReactNode;
}

const Wrapper = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  height: calc(100vh - 42px);
`;

const Inner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export function Container(props: InnerProps) {
  const { children } = props;

  return <Wrapper>{children}</Wrapper>;
}

Container.Inner = function ContainerInner(props: InnerProps) {
  const { children } = props;

  return <Inner>{children}</Inner>;
};
