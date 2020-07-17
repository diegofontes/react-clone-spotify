import React from 'react';

import { Container } from './styles';
import ContainerList from  '../ContainerList';

import Widget from '../Widget';

const MainPage: React.FC = () => {
  return (
      <Container>
          <ContainerList
                title={'Tocadas Recentemente'}
                elements={[<Widget/>, 
                            <Widget/>, 
                            <Widget/>, 
                            <Widget/>,
                            <Widget/>]}
          />
      </Container>
  );
}

export default MainPage;