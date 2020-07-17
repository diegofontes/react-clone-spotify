import React from 'react';
// import { View } from 'react-native';

import { Container } from './styles';
import Main from '../Main';

const layout: React.FC = () => {
  return (
      <Container>
          {/* <MenuBar/> */}
            <Main/>
          {/* <BottomBar/> */}
      </Container>
  );
}

export default layout;