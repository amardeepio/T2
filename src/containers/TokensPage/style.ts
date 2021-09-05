import styled, { css } from 'styled-components';
import mStyled from '@material-ui/styles/styled';
import { withStyles } from '@material-ui/styles';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import InputBase from '@material-ui/core/InputBase';
import FormControl from '@material-ui/core/FormControl';
import Button from '../../components/Button';

export const ViewButton = styled(Button)`
    width: 84px;
    height: 24px;
    align-self: center;
    margin-top: auto;
    cursor: pointer;
`;

export const BottomRowInner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Link = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    line-height: 16px;
    cursor: pointer;
`;

export const LinkIcon = mStyled(OpenInNewIcon)({
    fontSize: '12px',
    marginLeft: '5px',
    '&:hover': {
        cursor: 'pointer',
    },
});

export const Box = styled.div`
    perspective: 40rem;
`;

export const BoxBody = styled.div<any>`
    width: 200px;
    height: 100%;
    transform-style: preserve-3d;
    transition: 0.707s transform;
    transform: ${(props) => (props.hover ? 'rotateY(-180deg)' : 'none')};
`;

const BoxStyles = css`
    background-color: #f6f8fa;
    border: 1px solid #d8e4fc;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    padding: 16px 13px 16px 16px;
    box-shadow: 0px 1px 2px rgba(225, 225, 225, 0.44);
    cursor: pointer;
    min-height: 200px;
    height: 100%;
    &:hover {
        box-shadow: 2px 2px 10px 0px #e7efff;
    }
`;

export const BoxFront = styled.div`
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    position: relative;
    cursor: pointer;
    ${BoxStyles};
`;

export const BoxBack = styled.div`
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    transform: rotateY(-180deg);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    cursor: pointer;
    ${BoxStyles}
`;

export const BoxesGrid = styled.div`
    display: grid;
    overflow: hidden;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 1fr;
    grid-column-gap: 40px;
    grid-row-gap: 40px;
    padding: 10px;
    margin-left: -10px;
    @media (min-width: 1150px) {
        grid-column-gap: 0px;
    }
    @media (min-width: 1300px) {
        grid-template-columns: repeat(4, 1fr);
        grid-column-gap: 40px;
    }
`;

export const BoxIcon = styled.div`
    width: 100%;
    display: flex;
    align-self: center;
    width: 40px;
    height: 40px;
`;

export const BoxIconWrapper = styled.div`
    align-self: center;
    margin-top: calc(50% - 40px);
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

export const BoxTitle = styled.div`
    font-size: 16px;
    line-height: 24px;
    width: 100%;
    text-align: center;
    margin-top: 8px;
`;

export const BoxDescription = styled.div`
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    margin-top: 16px;
`;

export const BlueLink = styled.span<{ isActive: boolean | undefined }>`
    color: ${({ isActive }) => (isActive ? '#2F80ED' : '')};
    cursor: ${({ isActive }) => (isActive ? 'pointer' : '')};
    align-self: center;
    font-size: 12px;
    line-height: 14px;
`;

export const TokensTitle = styled.div`
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0.015em;
    color: #132c57;
    margin: 24px 0px 0px 10px;
`;

export const BalanceTitle = styled.div`
    font-size: 16px;
    line-height: 16px;
    margin-top: auto;
`;

export const BalanceAmount = styled.div`
    font-size: 16px;
    line-height: 24px;
    margin-top: 4px;
`;

export const ListsWrapper = styled.div`
    padding: 0px 24px 24px;
`;

export const SearchForm = mStyled(FormControl)({
    marginTop: '16px',
    display: 'flex',
});

export const SearchInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
        backgroundColor: '#F4F4F4',
        borderRadius: '4px',
        height: '32px',
        maxWidth: '462px',
        padding: '0px 12px',
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: '#F4F4F4',
        fontSize: 16,
        width: 'auto',
        padding: '0px 0px 0px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
    },
}))(InputBase);
