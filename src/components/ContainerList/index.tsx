import React from 'react';

import { Container, Header, Wrapper } from './styles';

interface Props {
    title: string;
    elements: React.ReactNode[];
}

const ContainerList: React.FC<Props> = ({elements, title}) => {
  return (
      <Container >
          <Header>
             <span>{title}</span>
             <span>VER TUDO</span>
          </Header>
          {elements.map( (element, index) => (
            <Wrapper>{element}</Wrapper> 
          ))}          
      </Container>
  );
}

export default ContainerList;