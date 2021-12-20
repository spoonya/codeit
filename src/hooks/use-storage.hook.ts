import React from 'react';

export default function useStorage(
  storageName: string,
  defaultVal: string,
): [string, React.Dispatch<any>] {
  const [value, setValue] = React.useState(() => {
    const projectJson = localStorage.getItem(storageName);

    if (projectJson !== null) return JSON.parse(projectJson);

    return defaultVal;
  });

  React.useEffect(() => {
    localStorage.setItem(storageName, JSON.stringify(value));
  }, [storageName, value]);

  return [value, setValue];
}
