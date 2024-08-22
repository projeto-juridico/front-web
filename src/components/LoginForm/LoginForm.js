import InputText from '../InputText/InputText'
import './LoginForm.css'

const LoginForm = () => {
    return (
        <div className='login-form'>
            <h1 className='title-label'>WELCOME BACK</h1>
            <h2 className='description-label'>Welcome back! Please enter you details.</h2>
            <InputText label='Email' placeholder='Enter your email' />
            <InputText label='Password' placeholder='Enter your password' />
        </div>
    )
}

export default LoginForm