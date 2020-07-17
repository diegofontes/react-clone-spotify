import styled, { css } from 'styled-components';
import { 
    ArrowIosBackOutline,
    ArrowIosForwardOutline,
    DownArrow 
} from '../../styles/Icons';


export const Container = styled.div`

        z-index: 2;
        position: sticky; /* Elemento fixado na tela */
        top: 0;

        display: flex;
        justify-content: space-between;
        align-items: center;

        height: 60px;
        width: auto;
        padding: 15px 31px;

        background: var(--black);
        
`;

export const Paginacao = styled.div`
        display: flex;
        align-items: center;
        justify-content: flex-start;
        height: 32px;

        > button {
            width: 32px;
            height:32px;
            border-radius: 50px;

            outline: 0;
            display: flex;
            align-items: center;
            justify-content:center;

            /* &:hover {
                background: var(--gray);
            } */

            &:first-child {
                margin-right: 16px;
            }

        }

`;

const IconCSS = css`
        height: 22px;
        width: 22px;
        fill: var(--white);
`;


export const ArrowLeftIcon = styled(ArrowIosBackOutline)`${IconCSS}`;

export const ArrowRigthIcon = styled(ArrowIosForwardOutline)`${IconCSS}`;


export const Profile = styled.div`
        height: 32px;
        width: 196.22px;
        display: flex;
        align-items: center;

        position: relative;

        > button {
            width: 100%;
            height: 100%;

            border-radius: 15px;
            background: var(--black);
            margin: 0 0 0 16px;
            outline: 0;
            
            display: flex;
            justify-content: flex-end;
            align-items: center;

            > span {
                font-size: 14px;
                font-weight: 700;
                line-height: 16px;
                letter-spacing: normal;
                text-transform: none;

                margin-left: 35px;

                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;

                max-width: 110px;
                pointer-events: none;

            }

            &:hover {
                background: var(--black-hover)
            }
        }

`;
export const Avatar = styled.div`
        height: 28px;
        width: 28px;
        border-radius: 50px;
        border: 0;
        background: var(--gray);   

        flex-shrink: 0;

        position: absolute;
        top: 2px;
        left: 15px;

`;
export const ArrowBottonIcon = styled(DownArrow)`

        margin: 0 10px;
        width: 12px;
        height:12px;

        fill: var(--white);
`;