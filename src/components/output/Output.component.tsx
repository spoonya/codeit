import React from 'react';
import styled from 'styled-components/macro';
import { Hook, Decode } from 'console-feed';

import { LogsAction } from '../../store/reducers/logs/logs.type';

interface OutputProps {
  srcDoc: string;
  setLogs: (val: any[]) => LogsAction;
}

interface OutputState {
  contentRef: React.RefObject<any> | null;
}

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  background-color: #fff;
  border: 0;
`;

export default class Output extends React.Component<OutputProps, OutputState> {
  constructor(props: OutputProps) {
    super(props);

    this.state = {
      contentRef: React.createRef(),
    };
  }

  render() {
    return (
      <Container>
        <Iframe
          srcDoc={this.props.srcDoc}
          title="output"
          sandbox="allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
          referrerPolicy="origin"
          ref={this.state.contentRef}
          onLoad={() => {
            Hook(this.state.contentRef!.current!.contentWindow!.console, (log) => {
              this.props.setLogs([Decode(log)]);
            });
          }}
        />
      </Container>
    );
  }
}
