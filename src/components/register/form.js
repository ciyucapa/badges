import PropTypes from 'prop-types'

import InputField from "../commons/inputField";
import ButtonField from "../commons/buttonField";

const Form = (props) => (
    <div>
        <h1>Rellenar</h1>
        <div style={{marginBottom:"10px"}} >
            <InputField
                type="text"
                value={props.name}
                changeValue={props.changeName}
                id="outlined-basic"
                label="Nombres Completos"
                variant="outlined"
                size="small"
            />
        </div>
        <div style={{marginBottom:"10px", marginTop:"10px"}}>
            <InputField
                type="email"
                value={props.email}
                changeValue={props.changeEmail}
                id="outlined-basic"
                label="Correo Eléctronico"
                variant="outlined"
                size="small"
            />
        </div>
        <div style={{marginBottom:"10px", marginTop:"10px"}}>
            <InputField
                value={props.profession}
                changeValue={props.changeProfession}
                id="outlined-basic"
                label="Cual es tu profesión"
                variant="outlined"
                size="small"
            />
        </div>
        <div style={{marginTop:"10px"}}>
            <InputField
                value={props.redSocial}
                changeValue={props.changeRedSocial}
                id="outlined-basic"
                label="Cual es tu red social"
                variant="outlined"
                size="small"
            />
        </div>
        <ButtonField
            title="Enviar"
            onClick={props.clickForm}
            isValidForm={!props.isValidForm}
            variant="contained"
            color="primary"
        />
        <div>¿No tienes cuenta?</div>
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
