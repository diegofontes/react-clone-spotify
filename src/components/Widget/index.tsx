import React from 'react';

import { Container, Avatar, Info } from './styles';

const Widget: React.FC = () => {
  return (
      <Container>
          <Avatar/>
            <Info>
              <span> Tribalistas </span>
              <span> Artista </span>
            </Info>
      </Container>
  );
}

export default Widget;