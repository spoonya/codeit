import React from 'react';
import { useTranslation } from 'react-i18next';

import { Sidebar } from '../../../../../components';
import { settings } from '../../../../../constants';
import { useActions, useTypedSelector } from '../../../../../hooks';

export function LiveModeSetting() {
  const { autorun } = useTypedSelector((store) => store.autorun);
  const { toggleAutorun } = useActions();

  const { t } = useTranslation();

  return (
    <Sidebar.TabSubListItem>
      <Sidebar.TabSwitch
        label={t('sidebar.settings.editor.autorun')}
        onChange={() => toggleAutorun(autorun)}
        checked={autorun === settings.autorun.values.auto}
      />
    </Sidebar.TabSubListItem>
  );
}
