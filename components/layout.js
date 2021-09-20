import styled from 'styled-components';

import NavBarBottom from '@components/navbar-bottom.module';
import Header from '@components/header.module';
import { useState } from 'react';
import { motion } from 'framer-motion'

const Layout = ({props, children}) => {
    
    props = props || useState({});

    const variants = {
        hidden: { opacity: 0, x: 200, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 200, y: 0 },
    }
    
    return (
        <Container>
            <motion.main
                variants={variants} // Pass the variant object into Framer Motion 
                initial="hidden" // Set the initial state to variants.hidden
                animate="enter" // Animated state to variants.enter
                exit="exit" // Exit state (used later) to variants.exit
                transition={{ type: 'linear' }} // Set the transition to linear
                className=""
            >
                {props.hasHeader ? (<Header />) : ('')}
                
                <Content>
                    {children}
                </Content>
                
                {props.hasNavBarBottom ? (<NavBarBottom />) : ('')}
            </motion.main>
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