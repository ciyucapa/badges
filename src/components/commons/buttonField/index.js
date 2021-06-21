import PropTypes from 'prop-types';

const ButtonField = (props) => (
    <button onClick={props.onClick} disabled={props.isValidForm}>
        {props.title}
    </button>
);

ButtonField.propTypes = {
    title: PropTypes.string,
    isValidForm: PropTypes.bool,
    onClick: PropTypes.func,
};

ButtonField.defaultProps = {
    title: '',
    isValidForm: false,
    onClick: () => {},
};

export default ButtonField;
