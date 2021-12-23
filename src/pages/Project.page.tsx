import React from 'react';
import { SplitPane } from 'react-multi-split-pane';

import Container from '../components/container/Container.component';
import CodeEditor from '../components/editor/Editor.component';
import Output from '../components/output/Output.component';
import ConsoleContainer from '../containers/Console.container';
import HeaderContainer from '../containers/Header.container';
import SidebarContainer from '../containers/sidebar/Sidebar.container';
import project from '../constants/project.constant';
import useActions from '../hooks/use-actions.hook';
import useStorage from '../hooks/use-storage.hook';

export default function Project() {
  const [html, setHTML] = useStorage(project.html.storage, '');
  const [css, setCSS] = useStorage(project.css.storage, '');
  const [js, setJS] = useStorage(project.js.storage, '');
  const [srcDoc, setSrcDoc] = React.useState('');

  const { setLogs } = useActions();

  const delay = 1000;

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>
            setTimeout(() => {
              try {
                ${js}
              } catch (e) {
                console.error(e.message)
              }
            }, ${delay});
          </script>
        </html>
      `);
    }, delay);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <>
      <HeaderContainer />
      <Container>
        <SidebarContainer />
        <Container.Inner>
          <SplitPane split="horizontal" defaultSizes={[65, 20, 25]} minSize={[28, 20, 27]}>
            <div>
              <SplitPane split="vertical" minSize={52}>
                <CodeEditor language="html" code={html} onChanged={setHTML} langLabel="html" />
                <CodeEditor language="css" code={css} onChanged={setCSS} langLabel="css" />
                <CodeEditor language="javascript" code={js} onChanged={setJS} langLabel="js" />
              </SplitPane>
            </div>
            <Output srcDoc={srcDoc} setLogs={setLogs} />
            <ConsoleContainer />
          </SplitPane>
        </Container.Inner>
      </Container>
    </>
  );
}
