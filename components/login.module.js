import { signIn } from 'next-auth/client'
import Image from 'next/image'
import styled from 'styled-components'

const Login = () => {

    const buttons = [
        {
            name: "Google",
            icon: "icon-google.png",
            text: "Login com Google",
            className: "is-google",
            handler: (e) => {
                e.preventDefault()
                signIn('google');
            }
        },
        {
            name: "Github",
            icon: "icon-github.png",
            text: "Login com Github",
            className: "is-github",
            handler: (e) => {
                e.preventDefault()
                signIn('github');
            }
        }
    ]
    
    return (
        <ButtonsArea>
            {buttons.map((button, index)=>{
                return <Button key={index} onClick={button.handler} className={button.className}><Image src={`/${button.icon}`} width={25} height={25}/><ButtonText>{button.text}</ButtonText></Button>
            })}
        </ButtonsArea>
    );
}

const ButtonsArea = styled.div`
    width: 100%;
    float: left;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Button = styled.a`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    box-shadow: 0 1px 3px 1px rgba(0,0,0,0.15);
    border-radius: 6px;
    cursor: pointer;

    &:hover {
        opacity: 0.7;
    }

    & + & {
        margin-top: 25px;
    }
`

const ButtonText = styled.span`
    margin: auto;
    padding: 0 5px;
`

export default Login;