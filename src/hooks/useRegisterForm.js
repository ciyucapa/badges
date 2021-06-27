import {useState, useMemo, useCallback} from 'react';

const useRegisterForm = () => {
    const [name, changeName] = useState('');
    const [email, changeEmail] = useState('');
    const [profession, changeProfession] = useState('');
    const [redSocial, changeRedSocial] = useState('');

    const isValidForm = useMemo(() => {
        return (name && email && profession && redSocial);
    }, [name, email, profession, redSocial]);

    const clickForm = useCallback(async () => {

    }, []);

    return {
        name,
        email,
        profession,
        redSocial,
        changeName,
        changeEmail,
        changeProfession,
        changeRedSocial,
        isValidForm,
        clickForm,
    };
};

export default useRegisterForm;
