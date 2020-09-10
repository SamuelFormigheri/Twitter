import React from 'react';

import SideBar from './SideBar';
import TimeLine from './TimeLine';
import SideBarSecondary from './SideBarSecondary'
import { Container } from './styles';

const PageContent: React.FC = () => {
  return <Container>
        <SideBar />
        <TimeLine />
        <SideBarSecondary />
  </Container>;
}

export default PageContent;