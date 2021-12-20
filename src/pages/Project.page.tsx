import React from 'react';
import { SplitPane } from 'react-multi-split-pane';

import Container from '../components/container/Container.component';
import CodeEditor from '../components/editor/Editor.component';
import Output from '../components/ouput/Output.component';
import project from '../constants/project.constant';
import ConsoleContainer from '../containers/Console.container';
import HeaderContainer from '../containers/Header.container';
import SidebarContainer from '../containers/sidebar/Sidebar.container';
import useStorage from '../hooks/use-storage.hook';

export default function Project() {
  const [html, setHtml] = useStorage(project.html.storage, '');
  const [css, setCss] = useStorage(project.css.storage, '');
  const [js, setJs] = useStorage(project.js.storage, '');
  const [srcDoc, setSrcDoc] = React.useState('');

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `);
    }, 500);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <>
      <HeaderContainer />
      <Container>
        <SidebarContainer />
        <Container.Inner>
          <SplitPane split="horizontal" defaultSizes={[65, 20, 25]} minSize={[28, 8, 28]}>
            <div>
              <SplitPane split="vertical" minSize={52}>
                <CodeEditor language="html" code={html} onChanged={setHtml} langLabel="html" />
                <CodeEditor language="css" code={css} onChanged={setCss} langLabel="css" />
                <CodeEditor language="javascript" code={js} onChanged={setJs} langLabel="js" />
              </SplitPane>
            </div>
            <Output srcDoc={srcDoc} />
            <ConsoleContainer />
          </SplitPane>
        </Container.Inner>
      </Container>
    </>
  );
}
