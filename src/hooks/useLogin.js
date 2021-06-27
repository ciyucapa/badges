import {useCallback, useMemo, useState} from 'react';

const useLogin = () => {
    const [email, changeEmail] = useState('');
    const [password, changePassword] = useState('');

    const isValidForm = useMemo(() => {
        return(email && password);
    }, [email, password])

    const login = useCallback(() => {

    }, [])

    return {
        email,
        password,
        changePassword,
        changeEmail,
        login,
        isValidForm
    };
};

export default useLogin;
