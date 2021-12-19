import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import React from 'react';

import Sidebar from '../../../../components/sidebar/Sidebar.component';

export default function FontSizeSetting() {
  return (
    <Sidebar.TabSubListItem>
      <Sidebar.TabSelect>
        <FormControl variant="standard">
          <InputLabel shrink>Font size</InputLabel>
          <Select value="normal" displayEmpty>
            <MenuItem value="small" style={{ fontSize: 14 }}>
              small
            </MenuItem>
            <MenuItem value="normal" style={{ fontSize: 14 }}>
              normal
            </MenuItem>
            <MenuItem value="large" style={{ fontSize: 14 }}>
              large
            </MenuItem>
            <MenuItem value="huge" style={{ fontSize: 14 }}>
              huge
            </MenuItem>
          </Select>
        </FormControl>
      </Sidebar.TabSelect>
    </Sidebar.TabSubListItem>
  );
}
