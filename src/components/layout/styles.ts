import styled from 'styled-components';


export const Container = styled.div`
    /* max-width: 100vw; */
    height: 100vh;

    display: grid;
    grid-template-areas:
        'MB MA'
        'BB BB';

    grid-template-columns: 232px auto;
    grid-template-rows: auto 90px;
`;

// export const MenuBar = styled.div``
// export const Main = styled.div``
// export const BottomBar = styled.div``