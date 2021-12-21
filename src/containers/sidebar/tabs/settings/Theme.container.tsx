import React from 'react';
import { useTranslation } from 'react-i18next';

import Sidebar from '../../../../components/sidebar/Sidebar.component';
import { settings } from '../../../../constants/sidebar-tabs/settings.constant';
import useActions from '../../../../hooks/use-actions.hook';
import useTypedSelector from '../../../../hooks/use-typed-selector.hook';

export default function ThemeSetting() {
  const { themeMode } = useTypedSelector((store) => store.theme);
  const { toggleTheme } = useActions();

  const { t } = useTranslation();

  return (
    <Sidebar.TabSubListItem>
      <Sidebar.TabSwitch
        label={t('sidebar.settings.general.lightTheme')}
        onChange={() => toggleTheme(themeMode)}
        checked={themeMode === settings.theme.light}
      />
    </Sidebar.TabSubListItem>
  );
}
