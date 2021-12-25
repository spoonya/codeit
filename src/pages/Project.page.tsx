import React from 'react';
import { SplitPane } from 'react-multi-split-pane';

import Container from '../components/container/Container.component';
import CodeEditor from '../components/editor/Editor.component';
import Output from '../components/output/Output.component';
import ConsoleContainer from '../containers/Console.container';
import HeaderContainer from '../containers/Header.container';
import SidebarContainer from '../containers/sidebar/Sidebar.container';
import useActions from '../hooks/use-actions.hook';
import useStorage from '../hooks/use-storage.hook';
import useTypedSelector from '../hooks/use-typed-selector.hook';
import { settings } from '../constants/sidebar-tabs/settings.constant';
import project from '../constants/project.constant';

export default function Project() {
  const [html, setHTML] = useStorage(project.html.storage, '');
  const [css, setCSS] = useStorage(project.css.storage, '');
  const [js, setJS] = useStorage(project.js.storage, '');
  const [srcDoc, setSrcDoc] = React.useState('');

  const { setLogs } = useActions();
  const { layoutType } = useTypedSelector((store) => store.layout);
  const { liveMode } = useTypedSelector((store) => store.liveMode);

  const delay = 1000;
  const srcTemplate: string = `
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
      `;

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (liveMode !== settings.liveMode.values.auto) return;

      setSrcDoc(srcTemplate);
    }, delay);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <>
      <HeaderContainer
        srcDoc={srcTemplate}
        setSrcDoc={setSrcDoc}
        isRunDisabled={liveMode === settings.liveMode.values.auto}
      />
      <Container>
        <SidebarContainer />
        {layoutType === settings.layout.values.horizontal ? (
          <Container.Inner>
            <SplitPane split="horizontal" defaultSizes={[65, 20, 3]} minSize={[28, 20, 27]}>
              <SplitPane split="vertical" minSize={55}>
                <CodeEditor language="html" code={html} onChanged={setHTML} langLabel="html" />
                <CodeEditor language="css" code={css} onChanged={setCSS} langLabel="css" />
                <CodeEditor language="javascript" code={js} onChanged={setJS} langLabel="js" />
              </SplitPane>
              <Output srcDoc={srcDoc} setLogs={setLogs} />
              <ConsoleContainer />
            </SplitPane>
          </Container.Inner>
        ) : (
          <Container.Inner>
            <SplitPane split="vertical" defaultSizes={[65, 45]} minSize={[1, 195]}>
              <SplitPane split="horizontal" minSize={27}>
                <CodeEditor language="html" code={html} onChanged={setHTML} langLabel="html" />
                <CodeEditor language="css" code={css} onChanged={setCSS} langLabel="css" />
                <CodeEditor language="javascript" code={js} onChanged={setJS} langLabel="js" />
              </SplitPane>
              <SplitPane split="horizontal" defaultSizes={[65, 2]} minSize={[25, 27]}>
                <Output srcDoc={srcDoc} setLogs={setLogs} />
                <ConsoleContainer />
              </SplitPane>
            </SplitPane>
          </Container.Inner>
        )}
      </Container>
    </>
  );
}
