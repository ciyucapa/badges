import PropTypes from 'prop-types'

import InputField from "../commons/inputField";
import ButtonField from "../commons/buttonField";

const Form = (props) => (
    <div>
        <h1>Rellenar</h1>
        <div>
            <InputField
                placeholder="Nombres completos"
                value={props.name}
                changeValue={props.changeName}
            />
        </div>
        <div>
            <InputField
                placeholder="Correo eléctronico"
                type="email"
                value={props.email}
                changeValue={props.changeEmail}
            />
        </div>
        <div>
            <InputField
                placeholder="Cual es tu profesión"
                value={props.profession}
                changeValue={props.changeProfession}
            />
        </div>
        <div>
            <InputField
                placeholder="Cual es tu red social"
                value={props.redSocial}
                changeValue={props.changeRedSocial}
            />
        </div>
        <ButtonField
            title="Enviar"
            onClick={props.clickForm}
            isValidForm={!props.isValidForm}
        />
    </div>
);

Form.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    profession: PropTypes.string,
    redSocial: PropTypes.string,
    isValidForm: PropTypes.bool,
    changeRedSocial: PropTypes.func,
    changeEmail: PropTypes.func,
    changeProfession: PropTypes.func,
    changeName: PropTypes.func,
    clickForm: PropTypes.func,
};

Form.defaultProps = {
    name: '',
    email: '',
    profession: '',
    redSocial: '',
    isValidForm: false,
    changeName: () => {},
    changeEmail: () => {},
    changeProfession: () => {},
    changeRedSocial: () => {},
    clickForm: () => {},
}

export default Form;
