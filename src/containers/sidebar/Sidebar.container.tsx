import React from 'react';
import { Settings } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

import { sidebarTabs } from '../../constants';
import { SettingsTab } from './tabs';
import { Sidebar, Tooltip } from '../../components';

export function SidebarContainer() {
  const { t } = useTranslation();
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
          <Sidebar.ShareLink />
        </Sidebar.MenuItem>
        <Sidebar.MenuItem
          isActive={activeTab === sidebarTabs.settings}
          onClick={() => toggleTab(sidebarTabs.settings)}
        >
          <Tooltip title={t('tooltips.sidebar.settings')}>
            <Settings style={{ fontSize: 30 }} />
          </Tooltip>
        </Sidebar.MenuItem>
      </Sidebar.Menu>

      <SettingsTab isActive={activeTab === sidebarTabs.settings} />
    </Sidebar>
  );
}
