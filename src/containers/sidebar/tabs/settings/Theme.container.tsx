import React from 'react';

import Sidebar from '../../../../components/sidebar/Sidebar.component';
import { themeConfig } from '../../../../constants/theme.constant';
import useActions from '../../../../hooks/use-actions.hook';
import useTypedSelector from '../../../../hooks/use-typed-selector.hook';

export default function ThemeSetting() {
  const { themeMode } = useTypedSelector((store) => store.theme);
  const { toggleTheme } = useActions();

  return (
    <Sidebar.TabSubListItem>
      <Sidebar.TabSwitch
        label="Light theme"
        onChange={() => toggleTheme(themeMode)}
        checked={themeMode === themeConfig.light}
      />
    </Sidebar.TabSubListItem>
  );
}
