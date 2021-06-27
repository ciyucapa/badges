import PropTypes from 'prop-types';

import {Assents} from '../../resources/assents';

import './badge.css';

const Badge = (props) => (
    <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"center"}}>
        {props.characters.map(option => (
            <div className="badge" key={option.id}>
                <div className="badge__header">
                    <img src={Assents.platziConfLogo} alt="logo" />
                </div>
                <div style={{display:"flex", flexWrap:"wrap", marginLeft:"5px", marginRight:"5px", alignItems:"center"}}>
                    <img src={option.image} alt="avatar" className="badge__avatar"/>
                    <h3>{option.name}</h3>
                </div>
                <div className="badge__info">
                    <div>Mi status es: {option.status}</div>
                    <div>@{option.type}</div>
                </div>
                <div className="badge__footer">
                    <div className="badge__footer--item">#platziConfs</div>
                    <div className="badge__footer--item">{option.species}</div>
                </div>
            </div>
        ))}
    </div>
);

Badge.propTypes = {
    characters: PropTypes.array,
    name: PropTypes.string,
    profession: PropTypes.string,
    email: PropTypes.string,
    twitter: PropTypes.string,
};

Badge.defaultProps = {
    characters: [],
    name: '',
    profession: '',
    email: '',
    twitter: '',
};

export default Badge;
