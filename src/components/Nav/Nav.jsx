import { Box } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return <Box as='ul'>
        <Box as='li'>
            <Link to='/'>Home</Link>
        </Box>
        <Box as='li'>
            <Link to='/events'>Events</Link>
        </Box>
    </Box>;
};

export default Nav;
