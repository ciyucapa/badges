import PropTypes from 'prop-types';

import Box from '@material-ui/core/Box';

import {Assents} from '../../resources/assents';

import './badge.css';

const Badge = (props) => (
    <div className="badge">
        <div className="badge__header">
            <img src={Assents.platziConfLogo} alt="logo" />
        </div>
        <Box display="flex">
            <img src={Assents.avatar} alt="avatar" className="badge__avatar"/>
            <h1>{props.name}</h1>
        </Box>
        <div className="badge__info">
            <div>Soy {props.profession}</div>
            <div>{props.email}</div>
            <div>@{props.twitter}</div>
        </div>
        <div className="badge__footer">#platziConfs</div>
    </div>
);

Badge.propTypes = {
    name: PropTypes.string,
    profession: PropTypes.string,
    email: PropTypes.string,
    twitter: PropTypes.string,
};

Badge.defaultProps = {
    name: '',
    profession: '',
    email: '',
    twitter: '',
};

export default Badge;
