import styled from 'styled-components';

export const Container = styled.div`
        display: grid;
        margin-top: 14px;



        padding-bottom: 16px;
        max-height: 370px; 
        gap: 1rem;
        grid-template-areas:
        'HL HL HL HL HL'
        'LW LW LW LW LW';
        grid-template-columns: 18.5% 18.5% 18.5% 18.5% 18.5% ;
        grid-template-rows: 33px auto;

`;

export const Header = styled.div`
        grid-area: HL;

        display: flex;
        justify-content: space-between;
        align-items: center;

        > span {
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            cursor: pointer;
        }

        > span:nth-child(1) {
            font-size: 24px;
        }

        > span:nth-child(2) {
            color: var(--gray);  
            font-size: 12px;
            font-weight: 700;
            line-height: 16px;
            letter-spacing: .1em;
            text-transform: uppercase;
        }
`;

export const Wrapper = styled.div`
        grid-area: LW;
        grid-column: 1 / 2;
        grid-row: 2 / 2;
        background: var(--black-hover);
        border-radius: 10px;
        max-width: 185px; 


        &:first-child {
            grid-column: 1 / 2;
            grid-row: 2 / 2;
            background: var(--black-hover);
            border-radius: 10px;
            max-width: 185px;  
        }

        &:nth-child(2) {
            grid-column: 2 / 3;
            grid-row: 2 / 2;
            background: var(--black-hover);
            border-radius: 10px;
            max-width: 185px;  
        }

        &:nth-child(3) {
            grid-column: 3 / 4;
            grid-row: 2 / 2;
            background: var(--black-hover);
            border-radius: 10px;   
        }

        &:nth-child(4) {
            grid-column: 4 / 5;
            grid-row: 2 / 2;
            background: var(--black-hover);
            border-radius: 10px;
            max-width: 185px;   
        }

        &:nth-child(5) {
            grid-column: 5 / 5;
            grid-row: 2 / 2;
            background: var(--black-hover);
            border-radius: 10px;   
            max-width: 185px;
        }
`;