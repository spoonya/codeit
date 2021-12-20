import { FormControl, InputLabel, Select } from '@mui/material';
import React from 'react';

import Sidebar from '../../../../components/sidebar/Sidebar.component';
import { MenuItemStyled } from '../../../../components/sidebar/styles/sidebar.style';

export default function FontSizeSetting() {
  return (
    <Sidebar.TabSubListItem>
      <Sidebar.TabSelect>
        <FormControl variant="standard">
          <InputLabel shrink>Font size</InputLabel>
          <Select value="normal" displayEmpty>
            <MenuItemStyled value="small">small</MenuItemStyled>
            <MenuItemStyled value="normal">normal</MenuItemStyled>
            <MenuItemStyled value="large">large</MenuItemStyled>
            <MenuItemStyled value="huge">huge</MenuItemStyled>
          </Select>
        </FormControl>
      </Sidebar.TabSelect>
    </Sidebar.TabSubListItem>
  );
}
