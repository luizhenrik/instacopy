import { signIn } from 'next-auth/client'

const Login = () => {
    const handleSignin = (e) => {
        e.preventDefault()
        signIn()
    }
    
    return (
        <a href="#" onClick={handleSignin}  className="btn-signin">Sign in</a>
    );
}

export default Login;