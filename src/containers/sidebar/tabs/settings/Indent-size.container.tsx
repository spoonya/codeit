import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import React from 'react';

import Sidebar from '../../../../components/sidebar/Sidebar.component';

export default function IndentSizeSetting() {
  return (
    <Sidebar.TabSubListItem>
      <Sidebar.TabSelect>
        <FormControl variant="standard">
          <InputLabel shrink>Indent size</InputLabel>
          <Select value="2" displayEmpty>
            <MenuItem value="2" style={{ fontSize: 14 }}>
              2
            </MenuItem>
            <MenuItem value="4" style={{ fontSize: 14 }}>
              4
            </MenuItem>
          </Select>
        </FormControl>
      </Sidebar.TabSelect>
    </Sidebar.TabSubListItem>
  );
}
