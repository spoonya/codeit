import React from 'react';
import { Settings, Share } from '@mui/icons-material';

import Sidebar from '../../components/sidebar/Sidebar.component';
import sidebarTabs from '../../constants/sidebar.constant';
import SettingsTab from './tabs/Settings.container';

export default function SidebarContainer() {
  const [activeTab, setActiveTab] = React.useState('');

  const toggleTab = (tabName: string): void => {
    if (activeTab === tabName) {
      setActiveTab('');
    } else {
      setActiveTab(tabName);
    }
  };

  return (
    <Sidebar>
      <Sidebar.Menu>
        <Sidebar.MenuItem>
          <Share style={{ fontSize: 30 }} />
        </Sidebar.MenuItem>
        <Sidebar.MenuItem
          isActive={activeTab === sidebarTabs.settings}
          onClick={() => toggleTab(sidebarTabs.settings)}
        >
          <Settings style={{ fontSize: 30 }} />
        </Sidebar.MenuItem>

        <Sidebar.MenuItem
          isActive={activeTab === sidebarTabs.test}
          onClick={() => toggleTab(sidebarTabs.test)}
        >
          <Settings style={{ fontSize: 30 }} />
        </Sidebar.MenuItem>
      </Sidebar.Menu>

      <SettingsTab isActive={activeTab === sidebarTabs.settings} />
    </Sidebar>
  );
}
