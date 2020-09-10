import React from 'react';

import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Bar from '../../components/Bar';
import PageContent from '../../components/PageContent';

import { Container } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header />
      <Banner />
      <Bar />
      <PageContent />
    </Container>
  );
}

export default Main;




