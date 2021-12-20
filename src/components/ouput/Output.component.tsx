import React from 'react';
import styled from 'styled-components/macro';

interface IframeProps {
  srcDoc: string;
}

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  background-color: #fff;
`;

export default function Output(props: IframeProps) {
  const { srcDoc } = props;

  return (
    <Container>
      <Iframe
        srcDoc={srcDoc}
        title="output"
        sandbox="allow-scripts allow-modals allow-same-origin"
        frameBorder="0"
      />
    </Container>
  );
}
