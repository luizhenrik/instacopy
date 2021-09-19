import styled from "styled-components";
import {useContext, ReactElement} from 'react';
import { Context } from "@context/common.context";
import { ArrowBackOutlined } from '@material-ui/icons';

const Comments = ({post}) => {
    const {isLoaded, setIsLoaded, setModalCommentsOpened} = useContext(Context);

    const toggleModal = () => {
        setModalCommentsOpened(post.postId);
    }

    return (
       <ModalCommentsModule id={`modalComments_${post.postId}`}>
           <ModalCommentsModule__header>
               <ModalCommentsModule__headerButton onClick={toggleModal}>
                   <ArrowBackOutlined />
               </ModalCommentsModule__headerButton>
               <ModalCommentsModule__headerTitle>Comentários</ModalCommentsModule__headerTitle>
           </ModalCommentsModule__header>
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

const ModalCommentsModule__header = styled.div`
    width: 100%;
    float: left;
    display: flex;
    align-items: center;
    padding: 10px;
`;

const ModalCommentsModule__headerButton = styled.a`
    width: 30px;
    height: 30px;
    float: left;
    font-size: 18px;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ModalCommentsModule__headerTitle = styled.h2`
    flex: 1 1 10em;
    float: left;
    font-size: 16px;
    color: #000;
    margin-left: 25px;
`;

export default Comments;