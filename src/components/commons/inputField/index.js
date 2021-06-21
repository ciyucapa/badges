import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const InputField = (props) => {
    const onChange = (event) => {
        props.changeValue(event.target.value);
    };
    return (
        <TextField
            {...props}
            onChange={onChange}
        />
    );
};

InputField.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    changeValue: PropTypes.func,
};

InputField.defaultProps = {
    type: "text",
    value: '',
    placeholder: '',
    changeValue: () => {},
};

export default InputField;
