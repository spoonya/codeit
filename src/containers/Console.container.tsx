import React from 'react';
import { Console as ConsoleFeed } from 'console-feed';

import { useTranslation } from 'react-i18next';

import Console from '../components/console/Console.component';
import useTypedSelector from '../hooks/use-typed-selector.hook';

export default function ConsoleContainer() {
  const { consoleLogs } = useTypedSelector((store) => store.logs);

  const { t } = useTranslation();

  return (
    <Console>
      <Console.Header>
        <Console.Title>{t('console.title')}</Console.Title>
      </Console.Header>
      <Console.Content>
        <ConsoleFeed logs={consoleLogs} variant="dark" />
      </Console.Content>
    </Console>
  );
}
