import React from 'react';

import Console from '../components/console/Console.component';

export default function ConsoleContainer() {
  return (
    <Console>
      <Console.Header>
        <Console.Title>Console</Console.Title>
      </Console.Header>
      <Console.Content />
    </Console>
  );
}
