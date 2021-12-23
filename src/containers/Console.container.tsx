import React from 'react';
import { Console as ConsoleFeed } from 'console-feed';

import { useTranslation } from 'react-i18next';

import Console from '../components/console/Console.component';
import useTypedSelector from '../hooks/use-typed-selector.hook';
import useActions from '../hooks/use-actions.hook';

export default function ConsoleContainer() {
  const { consoleLogs } = useTypedSelector((store) => store.logs);
  const { resetLogs } = useActions();

  const { t } = useTranslation();

  return (
    <Console>
      <Console.Header>
        <Console.Title>{t('console.title')}</Console.Title>
        <Console.Clear onClick={resetLogs}>{t('console.clear')}</Console.Clear>
      </Console.Header>
      <Console.Content>
        <ConsoleFeed logs={consoleLogs} variant="dark" />
      </Console.Content>
    </Console>
  );
}
