import React from 'react';
import { View } from 'react-native';

import { Container } from './styles';
import Topbar from '../TopBar';
import MainPage from '../MainPage';

const Main: React.FC = () => {
  return (
    <Container>
        <Topbar/>
         <MainPage /> 
    </Container>
  );
}

export default Main;