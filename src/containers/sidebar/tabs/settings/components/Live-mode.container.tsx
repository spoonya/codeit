import React from 'react';
import { useTranslation } from 'react-i18next';

import { Sidebar } from '../../../../../components';
import { settings } from '../../../../../constants';
import { useActions, useTypedSelector } from '../../../../../hooks';

export function LiveModeSetting() {
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
