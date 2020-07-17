import React from 'react';

import { Container, Avatar, Info, PlayButton, PlayIcon } from './styles';

interface Props {
    name: string;
}


const Widget: React.FC<Props> = ({name}) => {
  return (
      <Container>
          <Avatar/>
            <Info>
              <span>{name}</span>
              <span> Artista </span>
            </Info>
          
          <PlayButton className="playButton"  >
            <PlayIcon/>
          </PlayButton>
      </Container>
  );
}

export default Widget;