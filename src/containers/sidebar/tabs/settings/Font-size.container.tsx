import { FormControl, InputLabel, Select, SelectChangeEvent } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { editorRefArray } from '../../../../components/editor/Editor.component';
import Sidebar from '../../../../components/sidebar/Sidebar.component';
import { MenuItemStyled } from '../../../../components/sidebar/styles/sidebar.style';
import { settings } from '../../../../constants/sidebar-tabs/settings.constant';
import { getStorage, setStorage } from '../../../../helpers/storage.helper';

export default function FontSizeSetting() {
  const { t } = useTranslation();

  const initValue: number =
    +getStorage(settings.fontSize.storage) || settings.fontSize.defaultValue;
  const [fontSize, setFontSize] = React.useState(initValue);

  const handleChange = (event: SelectChangeEvent) => {
    setFontSize(parseInt(event.target.value, 10));

    editorRefArray.forEach((editor: any) =>
      editor.updateOptions({ fontSize: `${event.target.value}` }),
    );
    setStorage(settings.fontSize.storage, event.target.value);
  };

  return (
    <Sidebar.TabSubListItem>
      <Sidebar.TabSelect>
        <FormControl variant="standard">
          <InputLabel shrink>{t('sidebar.settings.editor.fontSize.title')}</InputLabel>
          <Select value={fontSize.toString()} onChange={handleChange}>
            <MenuItemStyled value={settings.fontSize.values.small}>
              {t('sidebar.settings.editor.fontSize.values.small')}
            </MenuItemStyled>
            <MenuItemStyled value={settings.fontSize.values.normal}>
              {t('sidebar.settings.editor.fontSize.values.normal')}
            </MenuItemStyled>
            <MenuItemStyled value={settings.fontSize.values.large}>
              {t('sidebar.settings.editor.fontSize.values.large')}
            </MenuItemStyled>
            <MenuItemStyled value={settings.fontSize.values.huge}>
              {t('sidebar.settings.editor.fontSize.values.huge')}
            </MenuItemStyled>
          </Select>
        </FormControl>
      </Sidebar.TabSelect>
    </Sidebar.TabSubListItem>
  );
}
