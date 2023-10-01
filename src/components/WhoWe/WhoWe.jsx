import React from "react";
import { Container, Flex, Heading, Text, Button, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import whowe from '../../assets/img/whowe.jpg';
import whowemain from '../../assets/img/whowemain.jpg';
import whowe2 from '../../assets/img/whowe2.jpg';
import Btn from "../Btn/Btn";

const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const images = [whowe, whowemain, whowe2];

const WhoWe = () => {


    return (
        <Box as="section" py={{ base: '36px', lg: '72px', xl: '90px' }}>
            <Container
                display={"flex"}
                flexDirection={'column'}
                gap={'24px'}
                borderRadius={'lg'}
                maxW={{ base: '744px', lg: '1000px', xl: '1176px' }}
                boxShadow="lg"
                p='12px'
            >
                <MotionHeading
                    as={'h1'}
                    color={'teal.600'}
                    initial="hidden"
                    animate="visible"
                    mb={6}
                    textAlign="center"
                    fontSize={{ base: '2xl', lg: '4xl' }}
                    fontWeight="bold"
                    position="relative"
                >

                    Український екологічний антикризовий фонд

                </MotionHeading>
                <MotionText
                    initial="hidden"
                    animate="visible"
                    fontSize={{ base: 'md', lg: 'lg' }}
                >
                    – це команда однодумців: екологів, екоактивістів, фахівців установ та відомств екологічного напрямку, небайдужих українців, які усвідомлюють усі жахливі наслідки повномасштабної ворожої агресії для екологічної ситуації в Україні.
                </MotionText>

                <Flex wrap="wrap" justifyContent="space-between">
                    {images.map((image, index) => (
                        <Box key={index} w={"30%"} h={'150px'} bgImage={image} bgRepeat={'no-repeat'} bgPosition={'center'} bgSize={'cover'} mb={4} borderRadius={'lg'}>
                            <MotionText
                                initial="hidden"
                                animate="visible"
                                textAlign="center"
                                fontSize={{ base: 'md', lg: 'lg' }}
                                fontWeight="medium"
                                p={4}
                                color="white"
                            >
                                слоган
                            </MotionText>
                        </Box>
                    ))}
                </Flex>

                <Box alignSelf={'center'}>
                    <Link to="/about">
                        <Btn text='go to about' style={{ width: '300px' }} />
                    </Link>
                </Box>
            </Container>
        </Box >
    );
};

export default WhoWe;
