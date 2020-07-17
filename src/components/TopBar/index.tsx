import React from 'react';
import { View } from 'react-native';

import { Container,
         Paginacao,
         ArrowLeftIcon,
         ArrowRigthIcon,
         Profile,
         Avatar,
         ArrowBottonIcon } from './styles';

const TopBar: React.FC = () => {
  return (
    <Container>
            <Paginacao>
                <button>
                    <ArrowLeftIcon/>
                </button>
                <button>
                    <ArrowRigthIcon/>
                </button>
            </Paginacao>
            <Profile>
                <button>
                  <Avatar/>
                  <span>Diego Jesus Fontes</span>
                  <ArrowBottonIcon/>
                </button>
            </Profile>
    </Container>
  );
}

export default TopBar;