import PropTypes from "prop-types";

const CharactersApi = (props) => (
        <div>
            {props.characters.map(option => (
                <div key={option.id}>
                   <div>NAME {option.name}</div>
                    <div>STATUS {option.status}</div>
                    <img src={option.image} />
                </div>
            ))}
        </div>
);

CharactersApi.propTypes = {
    characters: PropTypes.array,
    name:PropTypes.string,
    image:PropTypes.string,
    status:PropTypes.string,
    id:PropTypes.number,
};

CharactersApi.defaultProps = {
    name: '',
    status: '',
    id: 0,
    character: [],
};

export default CharactersApi;
