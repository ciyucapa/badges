import Box from '@material-ui/core/Box';

import {Assents} from '../../resources/assents';

const Navbar = () => {
    return (
        <div>
            <Box display="flex" justifyContent="space-between" bgcolor="black" p="10px" color="white" >
                <Box>
                    <img src={Assents.logo} alt="Logo" />
                </Box>
                <Box display="flex" flexDirection="row" justifyContent="space-between">
                    <Box marginLeft="10px" marginRight="10px">HOME</Box>
                    <Box marginLeft="10px">CONFI</Box>
                </Box>
            </Box>
        </div>
    )
}

export default Navbar;
