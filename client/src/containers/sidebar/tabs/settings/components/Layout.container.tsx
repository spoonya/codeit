import { SelectChangeEvent, FormControl, InputLabel, Select } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Sidebar } from '../../../../../components';
import { MenuItemStyled } from '../../../../../components/sidebar/styles/sidebar.style';
import { settings } from '../../../../../constants';
import { setStorage } from '../../../../../helpers/storage.helper';
import { useActions, useTypedSelector } from '../../../../../hooks';

export function LayoutSetting() {
  const { setLayout } = useActions();
  const { layoutType } = useTypedSelector((store) => store.layout);

  const { t } = useTranslation();

  const handleChange = (event: SelectChangeEvent) => {
    setLayout(event.target.value);
    setStorage(settings.layout.storage, event.target.value);
  };

  return (
    <Sidebar.TabSubListItem>
      <Sidebar.TabSelect>
        <FormControl variant="standard">
          <InputLabel shrink>{t('sidebar.settings.general.layout.title')}</InputLabel>
          <Select value={layoutType} onChange={handleChange} displayEmpty>
            <MenuItemStyled value={settings.layout.values.horizontal}>
              {t('sidebar.settings.general.layout.values.horizontal')}
            </MenuItemStyled>
            <MenuItemStyled value={settings.layout.values.vertical}>
              {t('sidebar.settings.general.layout.values.vertical')}
            </MenuItemStyled>
          </Select>
        </FormControl>
      </Sidebar.TabSelect>
    </Sidebar.TabSubListItem>
  );
}
