import styled from 'styled-components';

import { useSession, signOut } from 'next-auth/client';

import NavBarBottom from '@components/navbar-bottom.module';
import Header from '@components/header.module';
import Login from '@components/login.module';
import { useState } from 'react';
import { motion } from 'framer-motion'

const Layout = ({props, children}) => {
    
    props = props || useState({});

    const [session] = useSession();

    const variants = {
        hidden: { opacity: 0, x: 200, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: 0 },
    }

    const handleSignout = (e) => {
        e.preventDefault()
        signOut()
    }  

    if(!session) {
        return (
            <Container>
                <Content>
                    <Login />
                </Content>
            </Container>
        );
    }
    
    return (
        <Container>
            {!props.noHeader ? (<Header />) : ('')}
            <a href="#" onClick={handleSignout}  className="btn-signout">Sign out</a>
            
            <Content>
                {children}
            </Content>
            
            {!props.noNavBarBottom ? (<NavBarBottom />) : ('')}
        </Container>
        )
    };
    
    const Container = styled.div`
    width: 390px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    max-width: 100%;
    margin: 0 auto;
    height: 90vh;
    background-color: #FFF;
    border-radius: 12px;
    box-shadow: 0 0 8px 2px rgba(0,0,0, .25);
    flex-direction: column;
    transform: translate3d(0,0,0);
    overflow: hidden;
    
    @media(max-width: 939px) {
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        border-radius: 0;
    }
    `;
    
    const Content = styled.div`
    width: 100%;
    float: left;
    display: flex;
    flex-direction: column;
    flex: 1 1 10em;
    `;
    
    
    export default Layout;