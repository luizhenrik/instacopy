import styled from 'styled-components';

import NavBarBottom from '../components/navbar-bottom.module';
import Header from '../components/header.module';
import Timeline from '../components/timeline.module';

const Landing = () => {

  return (
    <Container>
      <Header />
      
      <Content>
        <Timeline />
      </Content>

      <NavBarBottom />
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


export default Landing;