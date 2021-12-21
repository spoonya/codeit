import { FormControl, InputLabel, Select, SelectChangeEvent } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

import Sidebar from '../../../../components/sidebar/Sidebar.component';
import { MenuItemStyled } from '../../../../components/sidebar/styles/sidebar.style';
import { settings } from '../../../../constants/sidebar-tabs/settings.constant';
import { setStorage } from '../../../../helpers/storage.helper';

export default function LocalizationSetting() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const handleChange = (event: SelectChangeEvent) => {
    changeLanguage(event.target.value);
    setStorage(settings.localization.storage, event.target.value);
  };

  return (
    <Sidebar.TabSubListItem>
      <Sidebar.TabSelect>
        <FormControl variant="standard">
          <InputLabel shrink>{t('sidebar.settings.general.language')}</InputLabel>
          <Select value={i18n.language} onChange={handleChange} displayEmpty>
            <MenuItemStyled value={settings.localization.values.en}>English</MenuItemStyled>
            <MenuItemStyled value={settings.localization.values.ru}>Русский</MenuItemStyled>
          </Select>
        </FormControl>
      </Sidebar.TabSelect>
    </Sidebar.TabSubListItem>
  );
}
