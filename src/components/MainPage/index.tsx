import React from 'react';

import { Container } from './styles';
import ContainerList from  '../ContainerList';

import Widget from '../Widget';

const MainPage: React.FC = () => {
  return (
      <Container>
          <ContainerList
                title={'Tocadas recentemente'}
                elements={[<Widget  name={'Rob Zombie'}/>, 
                            <Widget name={'Queen'}/>, 
                            <Widget name={'Baroes da pisadinha'}/>, 
                            <Widget name={'Emicida'}/>,
                            <Widget name={'Tonico e tinoco'}/>]}
          />

          <ContainerList
                title={'Seus podcasts mais escutados'}
                elements={[<Widget  name={'Nerd Cast'}/>, 
                            <Widget name={'Guga Cast'}/>, 
                            <Widget name={'Pura Neurose'}/>, 
                            <Widget name={'Devs Cansados'}/>,
                            <Widget name={'Naruhodo'}/>]}
                    />
      </Container>
  );
}

export default MainPage;