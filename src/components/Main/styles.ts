import styled from 'styled-components';

export const Container = styled.div`
    grid-area: MA;
    display: flex;

    flex-direction: column;

    max-height: 100%;
    overflow-y: auto; /* scroll no eixo y */ 
    scrollbar-width: none; /* firefox*/
    ::-webkit-scrollbar {
        display:none;
    }   

`;
