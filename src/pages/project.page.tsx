import React from 'react';
import useActions from '../hooks/use-actions.hook';
import useTypedSelector from '../hooks/use-typed-selector.hook';

export default function Project(): React.ReactElement {
  const { themeMode } = useTypedSelector((state) => state.theme);
  const { toggleTheme } = useActions();

  return (
    <div>
      <input type="checkbox" onChange={() => toggleTheme(themeMode)} />
    </div>
  );
}
