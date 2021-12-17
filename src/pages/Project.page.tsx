import React from 'react';
import ProjectContainer from '../components/project-container/Project-container.component';
import HeaderContainer from '../containers/Header.container';
import SidebarContainer from '../containers/sidebar/Sidebar.container';

export default function Project(): JSX.Element {
  return (
    <>
      <HeaderContainer />
      <ProjectContainer>
        <SidebarContainer />
      </ProjectContainer>
    </>
  );
}
