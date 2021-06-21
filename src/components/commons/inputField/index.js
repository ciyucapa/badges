import PropTypes from 'prop-types';

const InputField = (props) => {
    const onChange = (event) => {
        props.changeValue(event.target.value);
    };
    return (
        <input
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
    type: 'text',
    value: '',
    placeholder: '',
    changeValue: () => {},
};

export default InputField;
