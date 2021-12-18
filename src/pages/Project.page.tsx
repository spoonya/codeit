import React from 'react';

import Container from '../components/container/Container.component';
import HeaderContainer from '../containers/Header.container';
import SidebarContainer from '../containers/sidebar/Sidebar.container';

export default function Project() {
  return (
    <>
      <HeaderContainer />
      <Container>
        <SidebarContainer />
      </Container>
    </>
  );
}
