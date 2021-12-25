import React from 'react';
import { useTranslation } from 'react-i18next';

import Sidebar from '../../../../components/sidebar/Sidebar.component';
import { settings } from '../../../../constants/sidebar-tabs/settings.constant';
import useActions from '../../../../hooks/use-actions.hook';
import useTypedSelector from '../../../../hooks/use-typed-selector.hook';

export default function LiveModeSetting() {
  const { liveMode } = useTypedSelector((store) => store.liveMode);
  const { toggleLiveMode } = useActions();

  const { t } = useTranslation();

  return (
    <Sidebar.TabSubListItem>
      <Sidebar.TabSwitch
        label={t('sidebar.settings.editor.liveMode')}
        onChange={() => toggleLiveMode(liveMode)}
        checked={liveMode === settings.liveMode.values.auto}
      />
    </Sidebar.TabSubListItem>
  );
}
