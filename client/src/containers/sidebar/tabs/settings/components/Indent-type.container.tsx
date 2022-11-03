import { FormControl, InputLabel, Select, SelectChangeEvent } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { settings } from '../../../../../constants';
import { Sidebar, editorRefArray } from '../../../../../components';
import { MenuItemStyled } from '../../../../../components/sidebar/styles/sidebar.style';
import { getStorage, parseBooleanString, setStorage } from '../../../../../helpers';

export function IndentTypeSetting() {
  const { t } = useTranslation();

  const initValue = getStorage(settings.indentType.storage) || settings.indentType.defaultValue;
  const parsedInitValue: boolean = parseBooleanString(initValue.toString());
  const [indentType, setIndentType] = React.useState(parsedInitValue);

  const handleChange = (event: SelectChangeEvent) => {
    setIndentType(JSON.parse(event.target.value));

    editorRefArray.forEach((editor: any) =>
      editor.updateOptions({ insertSpaces: JSON.parse(event.target.value) }),
    );
    editorRefArray.forEach((editor: any) => editor.trigger('any', 'editor.action.formatDocument'));
    setStorage(settings.indentType.storage, event.target.value);
  };

  return (
    <Sidebar.TabSubListItem>
      <Sidebar.TabSelect>
        <FormControl variant="standard">
          <InputLabel shrink>{t('sidebar.settings.editor.indentType.title')}</InputLabel>
          <Select value={indentType.toString()} onChange={handleChange} displayEmpty>
            <MenuItemStyled value={settings.indentType.values.spaces.toString()}>
              {t('sidebar.settings.editor.indentType.values.spaces')}
            </MenuItemStyled>
            <MenuItemStyled value={settings.indentType.values.tabs.toString()}>
              {t('sidebar.settings.editor.indentType.values.tabs')}
            </MenuItemStyled>
          </Select>
        </FormControl>
      </Sidebar.TabSelect>
    </Sidebar.TabSubListItem>
  );
}
