import React from 'react';
import { useTranslation } from 'react-i18next';

import Console from '../components/console/Console.component';

export default function ConsoleContainer() {
  const { t } = useTranslation();

  return (
    <Console>
      <Console.Header>
        <Console.Title>{t('console.title')}</Console.Title>
      </Console.Header>
      <Console.Content />
    </Console>
  );
}
