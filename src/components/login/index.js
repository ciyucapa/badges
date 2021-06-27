import Form from './form';
import useLogin from '../../hooks/useLogin';

const Login = () => {
    const hook = useLogin();
    return <Form {...hook} />
};

export default Login
