import React from 'react';
import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  IconButton,
  Snackbar,
  Switch,
  TextField,
} from '@mui/material';
import { Share, Close, Check } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

import { Tooltip } from '../tooltip/Tooltip.component';
import {
  Container,
  Menu,
  MenuItem,
  Tab,
  TabHeader,
  TabHeaderInner,
  TabList,
  TabListItem,
  TabListName,
  TabSelect,
  TabSubList,
  TabSubListItem,
  TabSwitch,
} from './styles/sidebar.style';
import * as TSidebar from './types/sidebar.type';

export function Sidebar(props: TSidebar.InnerProps) {
  const { children } = props;

  return <Container>{children}</Container>;
}

Sidebar.Menu = function SidebarMenu(props: TSidebar.InnerProps) {
  const { children } = props;

  return <Menu>{children}</Menu>;
};

Sidebar.MenuItem = function SidebarMenuItem(props: TSidebar.ItemProps) {
  const { isActive, onClick, children } = props;

  return (
    <MenuItem isActive={isActive} onClick={onClick}>
      {children}
    </MenuItem>
  );
};

Sidebar.Tab = function SidebarTab(props: TSidebar.TabProps) {
  const { children, isActive } = props;

  return <Tab isActive={isActive}>{children}</Tab>;
};

Sidebar.TabHeader = function SidebarTabHeader(props: TSidebar.InnerProps) {
  const { children } = props;

  return (
    <TabHeader>
      <TabHeaderInner>{children}</TabHeaderInner>
    </TabHeader>
  );
};

Sidebar.TabList = function SidebarTabList(props: TSidebar.InnerProps) {
  const { children } = props;

  return <TabList>{children}</TabList>;
};

Sidebar.TabSubList = function SidebarTabSubList(props: TSidebar.InnerProps) {
  const { children } = props;

  return <TabSubList>{children}</TabSubList>;
};

Sidebar.TabListItem = function SidebarTabListItem(props: TSidebar.InnerProps) {
  const { children } = props;

  return <TabListItem>{children}</TabListItem>;
};

Sidebar.TabSubListItem = function SidebarTabSubListItem(props: TSidebar.InnerProps) {
  const { children } = props;

  return <TabSubListItem>{children}</TabSubListItem>;
};

Sidebar.TabListName = function SidebarTabListName(props: TSidebar.InnerProps) {
  const { children } = props;

  return <TabListName>{children}</TabListName>;
};

Sidebar.TabSwitch = function SidebarTabSwitch(props: TSidebar.SwitchProps) {
  const { label, onChange, checked } = props;

  return (
    <TabSwitch>
      <FormControl>
        <FormControlLabel
          control={<Switch onChange={onChange} checked={checked} />}
          label={label}
        />
      </FormControl>
    </TabSwitch>
  );
};

Sidebar.TabSelect = function SidebarTabSelect(props: TSidebar.InnerProps) {
  const { children } = props;

  return <TabSelect>{children}</TabSelect>;
};

function DialogTitleStyled(props: TSidebar.DialogTitlesProps) {
  const { children, onClose } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2, fontSize: 20 }}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 15,
            '& svg': {
              fontSize: '20px',
            },
          }}
        >
          <Close />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

Sidebar.ShareLink = function ShareLink() {
  const { t } = useTranslation();

  const [openModal, setOpenModal] = React.useState(false);
  const [openAlert, setOpenAlert] = React.useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleOpenAlert = () => {
    setOpenAlert(true);
  };

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  const copyUrl = () => {
    navigator.clipboard.writeText(window.location.toString());
  };

  return (
    <>
      <Tooltip title={t('tooltips.sidebar.share')}>
        <Share style={{ fontSize: 30 }} onClick={handleOpenModal} />
      </Tooltip>
      <Snackbar
        open={openAlert}
        autoHideDuration={2500}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        onClose={handleCloseAlert}
      >
        <Alert
          icon={<Check fontSize="inherit" sx={{ color: '#fff' }} />}
          severity="success"
          sx={{ width: '100%', fontSize: 16, backgroundColor: '#485fe0', color: '#fff' }}
        >
          {t('sidebar.share.alert')}
        </Alert>
      </Snackbar>
      <Dialog
        fullWidth
        onClose={handleCloseModal}
        aria-labelledby="share-dialog-title"
        open={openModal}
        sx={{
          '& .MuiDialog-paper': { maxWidth: 465 },
          '& .MuiPaper-root': {
            backgroundColor: 'background.modal',
          },
        }}
      >
        <DialogTitleStyled id="share-dialog-title" onClose={handleCloseModal}>
          {t('sidebar.share.title')}
        </DialogTitleStyled>
        <DialogContent dividers>
          <TextField
            variant="standard"
            label={t('sidebar.share.label')}
            value={window.location.href}
            fullWidth
            InputProps={{
              style: {
                fontSize: 18,
              },
              readOnly: true,
            }}
            InputLabelProps={{
              style: {
                fontSize: 18,
              },
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              copyUrl();
              handleCloseModal();
              handleOpenAlert();
            }}
            sx={{ fontSize: 16 }}
          >
            {t('sidebar.share.button')}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
