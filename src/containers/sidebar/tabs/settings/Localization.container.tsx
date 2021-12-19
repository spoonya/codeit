import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import React from 'react';

import Sidebar from '../../../../components/sidebar/Sidebar.component';

export default function LocalizationSetting() {
  return (
    <Sidebar.TabSubListItem>
      <Sidebar.TabSelect>
        <FormControl variant="standard">
          <InputLabel shrink>Language</InputLabel>
          <Select value="en" displayEmpty>
            <MenuItem value="en" style={{ fontSize: 14 }}>
              English
            </MenuItem>
            <MenuItem value="ru" style={{ fontSize: 14 }}>
              Русский
            </MenuItem>
          </Select>
        </FormControl>
      </Sidebar.TabSelect>
    </Sidebar.TabSubListItem>
  );
}
