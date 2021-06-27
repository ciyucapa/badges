import PropTypes from 'prop-types';

import InputField from '../commons/inputField';
import ButtonField from '../commons/buttonField';

const Form = (props) => (
    <div>
        <h1>Inicio de sesion</h1>
        <div>
            <InputField
                type="text"
                value={props.email}
                changeValue={props.changeEmail}
                id="outlined-basic"
                label="Correo Electronico"
                variant="outlined"
                size="small"
            />
        </div>
        <div>
            <InputField
                type="password"
                value={props.password}
                changeValue={props.changePassword}
                id="outlined-basic"
                label="Contraseña"
                variant="outlined"
                size="small"
            />
        </div>
        <div>
            <ButtonField
                title="Sing In"
                onClick={props.login}
                isValidForm={!props.isValidForm}
                variant="contained"
                color="secundary"
            />
        </div>
        <div style={{display:"flex"}}>
            <div>¿No tienes cuenta?</div>
            <div>Registrate</div>
        </div>
    </div>
);

Form.propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,
    isValidForm: PropTypes.bool,
    login: PropTypes.func,
    changeEmail: PropTypes.func,
    changePassword: PropTypes.func,
};

Form.defaultProps = {
    email: '',
    password: '',
    isValidForm: false,
    login: () => {},
    changeEmail: () => {},
    changePassword: () => {},
}

export default Form;
