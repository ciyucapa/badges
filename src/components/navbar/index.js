import Box from '@material-ui/core/Box';

import {Assents} from '../../resources/assents';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <Box display="flex" justifyContent="space-between" bgcolor="black" p="10px" color="white" >
                <Box>
                    <img src={Assents.logo} alt="Logo" />
                </Box>
                <Box display="flex" flexDirection="row" justifyContent="space-between">
                    <Box marginLeft="10px" marginRight="10px">
                        <Link to="/" >HOME</Link>
                    </Box>
                    <Box marginLeft="10px">
                        <Link to="/login" >Login</Link>
                    </Box>
                    <Box marginLeft="10px">
                        <Link to="/Register" >Register</Link>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default Navbar;
