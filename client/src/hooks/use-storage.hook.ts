import React from 'react';

import { getStorage, setStorage } from '../helpers';

export function useStorage(storageName: string, defaultVal: string): [string, React.Dispatch<any>] {
  const [value, setValue] = React.useState(() => {
    const projectJson = getStorage(storageName);

    if (projectJson !== '') return JSON.parse(projectJson);

    return defaultVal;
  });

  React.useEffect(() => {
    setStorage(storageName, JSON.stringify(value));
  }, [storageName, value]);

  return [value, setValue];
}
