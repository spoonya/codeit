import React from 'react';
import { Settings, Share, BugReport } from '@mui/icons-material';

import Sidebar from '../../components/sidebar/Sidebar.component';
import sidebarTabs from '../../constants/sidebar.constant';

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
          <BugReport style={{ fontSize: 30 }} />
        </Sidebar.MenuItem>
      </Sidebar.Menu>

      {activeTab === sidebarTabs.settings ? (
        <Sidebar.Tab>
          <Sidebar.TabHeader>Settings</Sidebar.TabHeader>
        </Sidebar.Tab>
      ) : null}

      {activeTab === sidebarTabs.test ? (
        <Sidebar.Tab>
          <Sidebar.TabHeader>Test</Sidebar.TabHeader>
        </Sidebar.Tab>
      ) : null}
    </Sidebar>
  );
}
