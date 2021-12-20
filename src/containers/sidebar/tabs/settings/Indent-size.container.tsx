import { FormControl, InputLabel, Select } from '@mui/material';
import React from 'react';

import Sidebar from '../../../../components/sidebar/Sidebar.component';
import { MenuItemStyled } from '../../../../components/sidebar/styles/sidebar.style';

export default function IndentSizeSetting() {
  return (
    <Sidebar.TabSubListItem>
      <Sidebar.TabSelect>
        <FormControl variant="standard">
          <InputLabel shrink>Indent size</InputLabel>
          <Select value="2" displayEmpty>
            <MenuItemStyled value="2">2</MenuItemStyled>
            <MenuItemStyled value="4">4</MenuItemStyled>
          </Select>
        </FormControl>
      </Sidebar.TabSelect>
    </Sidebar.TabSubListItem>
  );
}
