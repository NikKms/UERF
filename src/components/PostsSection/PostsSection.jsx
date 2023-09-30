import { Box, Container, Flex, Heading } from "@chakra-ui/react";

const PostsSection = () => {
    const gradient = 'linear-gradient(-45deg, #4de992, #16acdf)';

    const sectionStyles = {
        position: 'relative',
        overflow: 'hidden',
    };

    const gradientOverlayStyles = {
        content: '""',
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        zIndex: '-1',
        background: gradient,
        height: '50%',
    };

    return (
        <Box as="section" style={sectionStyles} py={{ base: '36px', lg: '72px', xl: '112px' }} >
            <Box style={gradientOverlayStyles} />
            <Container
                maxW={{ base: '744px', lg: '1000px', xl: '1176px' }}
                px='12px'
            >
                <Heading
                    mb={{ base: '32px', lg: "72px" }}
                    textAlign="center"
                    fontSize={{ base: '2xl', lg: '4xl' }}
                    fontWeight="bold"
                    color={"white"}
                >Экосистема Заботы: От Сознания к Действию</Heading>
                <Flex gap={{ base: '16px', md: '24px', lg: '32px' }} flexWrap={"wrap"} justifyContent="center"  >
                    <Box boxSize={{ base: '240px', md: '300px', lg: '360px' }} bg={"grey"}></Box>
                    <Box boxSize={{ base: '240px', md: '300px', lg: '360px' }} bg={"grey"}></Box>
                    <Box boxSize={{ base: '240px', md: '300px', lg: '360px' }} bg={"grey"}></Box>
                </Flex>
            </Container>
            <Box h="50%" bg="white" bottom="0" width="100%" zIndex="-1" />
        </Box >
    );
};

export default PostsSection;
