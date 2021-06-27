import Form from "./form";
import useRegisterForm from "../../hooks/useRegisterForm";

const Register = () => {
    const hook = useRegisterForm();
    return <Form {...hook} />
};

export default Register;

