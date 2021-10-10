import styled from 'styled-components';

import Layout from '@components/layout';
import Router  from 'next/router';
import { ArrowBackOutlined } from '@material-ui/icons';

const Comments = () => {

    const layoutOptions = {
        noHeader: true,
        noNavBarBottom: true
    }

    const closeModal = () => {
        Router.push("/");
    }
    
    return (
        <Layout props={layoutOptions}>
            <ModalCommentsModule>
                <ModalCommentsModule__header>
                    <ModalCommentsModule__headerButton onClick={closeModal}>
                        <ArrowBackOutlined />
                    </ModalCommentsModule__headerButton>
                    <ModalCommentsModule__headerTitle>Comentários</ModalCommentsModule__headerTitle>
                </ModalCommentsModule__header>
            </ModalCommentsModule>
        </Layout>
        
        )
    };

    const ModalCommentsModule = styled.div`
    width: 100%;
    float: left;
    border-radius: 12px;
    background-color: #FFF;
    z-index: 2;
    opacity: 1;
    pointer-events: all;
    transition: all 0.3s linear;
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