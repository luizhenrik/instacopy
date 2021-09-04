import styled from 'styled-components';

import NavBarBottom from '../components/navbar-bottom.module';
import Header from '../components/header.module';
import StoriesList from '../components/stories-list.module';

const Landing = ({users}) => {

  return (
    <Container>
      <Header />
      <Content>
        <StoriesList users={users}/>
        <Title>My First Next.js Page</Title>
      </Content>

      <NavBarBottom />
    </Container>
  )
};

const Container = styled.div`
  width: 390px;
  display: flex;
  flex-wrap: wrap;
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
    position: fixed;
    top: 0;
    left: 0;
    height: 100vmax;
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

const Title = styled.h1`
  color: red;
`;

Landing.getInitialProps = async (ctx) => {
    const res = await fetch('https://randomuser.me/api/?results=25')
    const json = await res.json()
    return { users: json.results }
}


export default Landing;