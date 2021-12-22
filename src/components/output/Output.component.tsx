import React from 'react';
import styled from 'styled-components/macro';
import { Hook, Decode } from 'console-feed';

import { Message } from 'console-feed/lib/definitions/Component';
import { SetLogsAction } from '../../store/reducers/logs/logs.type';

interface OutputProps {
  srcDoc: string;
  setLogs: (val: Message[]) => SetLogsAction;
}

interface OutputState {
  logs: any[];
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
      logs: [],
      contentRef: React.createRef(),
    };
  }

  render() {
    return (
      <Container>
        <Iframe
          srcDoc={this.props.srcDoc}
          title="output"
          sandbox="allow-modals allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts"
          referrerPolicy="origin"
          ref={this.state.contentRef}
          onLoad={() => {
            Hook(this.state.contentRef!.current!.contentWindow!.console, (log) => {
              this.setState(({ logs }) => ({ logs: [...logs, Decode(log)] }));
              this.props.setLogs(this.state.logs);
            });
          }}
        />
      </Container>
    );
  }
}
