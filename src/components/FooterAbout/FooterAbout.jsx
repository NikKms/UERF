import { Box, Text, VStack } from "@chakra-ui/layout";
import React from "react";

const FooterAbout = () => {

    return <Box as='div'>
        <VStack color='white'>
            <Text as='h2'>Український екологічний антикризовий Фонд</Text>
            <Text as='p'>adress</Text>
            <Text as='p'>email</Text>
            <Text as='p'>phone</Text>
        </VStack>
    </Box >
};

export default FooterAbout;
