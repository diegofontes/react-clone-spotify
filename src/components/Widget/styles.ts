import styled from 'styled-components';

export const Container = styled.div`
        position: relative;
        
        display: flex;
        height: 100%;
        padding: 20px;
        flex-direction: column;
        /* align-items: center  */
        justify-content: flex-end;

`;

export const Avatar = styled.div`
        width: 144px;
        height: 144px;

        margin-bottom: 20px;
        align-self: center;
        background: var(--gray);
        border-radius: 50%;
`;

export const Info = styled.div`
        height: 62px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        > span {
            font-size: 16px;
            font-weight: 700;
            line-height: 24px;
            letter-spacing: normal;
            text-transform: none;  
        }

        > span:nth-child(2) {
            font-size: 11px;
            font-weight: 400;
            line-height: 16px;
            letter-spacing: normal;
            text-transform: none;
            color: var(--gray);
        }

`;
