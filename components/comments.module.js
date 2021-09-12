import styled from "styled-components";
import {useContext, ReactElement} from 'react';
import { Context } from "../context/common.context";
import { CloseOutlined } from '@material-ui/icons';

// import { faTimes } from '@fortawesome/free-regular-svg-icons';

const Comments = () => {
    const {isLoaded, setIsLoaded, modalCommentsOpened, setModalCommentsOpened} = useContext(Context);

    const toggleModal = () => {
        setModalCommentsOpened(false);
    }

    return (
       <ModalCommentsModule className={(modalCommentsOpened) ? 'is-opened' : ''}>
           <ButtonClose onClick={toggleModal}>
               <CloseOutlined />
           </ButtonClose>
       </ModalCommentsModule> 
    )
}

const ModalCommentsModule = styled.div`
    width: 100%;
    height: 100%;
    float: left;
    position: fixed;
    top: 0;
    left: 0;
    border-radius: 12px;
    background-color: #FFF;
    z-index: 2;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s linear;

    &.is-opened {
        pointer-events: all;
        opacity: 1;
    }
`;

const ButtonClose = styled.a`
    width: 30px;
    height: 30px;
    float: left;
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 18px;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default Comments;