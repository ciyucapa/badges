import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const ButtonField = (props) => (
    <Button onClick={props.onClick} disabled={props.isValidForm}>
        {props.title}
    </Button>
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
