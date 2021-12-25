import { FormControl, InputLabel, Select, SelectChangeEvent } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { settings } from '../../../../../constants';
import { Sidebar, editorRefArray } from '../../../../../components';
import { MenuItemStyled } from '../../../../../components/sidebar/styles/sidebar.style';
import { getStorage, setStorage } from '../../../../../helpers';

export function IndentSizeSetting() {
  const { t } = useTranslation();

  const initValue: number =
    +getStorage(settings.indentSize.storage) || settings.indentSize.defaultValue;
  const [indentSize, setindentSize] = React.useState(initValue);

  const handleChange = (event: SelectChangeEvent) => {
    setindentSize(parseInt(event.target.value, 10));

    editorRefArray.forEach((editor: any) =>
      editor.updateOptions({ tabSize: `${event.target.value}` }),
    );
    setStorage(settings.indentSize.storage, event.target.value);
  };

  return (
    <Sidebar.TabSubListItem>
      <Sidebar.TabSelect>
        <FormControl variant="standard">
          <InputLabel shrink>{t('sidebar.settings.editor.indentSize.title')}</InputLabel>
          <Select value={indentSize.toString()} onChange={handleChange} displayEmpty>
            <MenuItemStyled value={settings.indentSize.values.twoSpaces}>2</MenuItemStyled>
            <MenuItemStyled value={settings.indentSize.values.fourSpaces}>4</MenuItemStyled>
          </Select>
        </FormControl>
      </Sidebar.TabSelect>
    </Sidebar.TabSubListItem>
  );
}
