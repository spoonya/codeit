import { FormControl, InputLabel, Select } from '@mui/material';
import React from 'react';

import Sidebar from '../../../../components/sidebar/Sidebar.component';
import { MenuItemStyled } from '../../../../components/sidebar/styles/sidebar.style';

export default function LocalizationSetting() {
  return (
    <Sidebar.TabSubListItem>
      <Sidebar.TabSelect>
        <FormControl variant="standard">
          <InputLabel shrink>Language</InputLabel>
          <Select value="en" displayEmpty>
            <MenuItemStyled value="en">English</MenuItemStyled>
            <MenuItemStyled value="ru">Русский</MenuItemStyled>
          </Select>
        </FormControl>
      </Sidebar.TabSelect>
    </Sidebar.TabSubListItem>
  );
}
