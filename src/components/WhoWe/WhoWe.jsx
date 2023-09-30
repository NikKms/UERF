import { Container, Flex, Heading, Image, Text, Button, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import whowe from '../../assets/svg/whowe.svg';
import Btn from "../Btn/Btn";

const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const WhoWe = () => {

    const headingVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const textVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } },
    };

    return (
        <Box as="section"
            py={{ base: '36px', lg: '72px', xl: '112px' }}
            background={'rgba(204, 225, 225,  0.1)'}
        >
            <Container
                bgColor={"white"}
                maxW={{ base: '744px', lg: '1000px', xl: '1176px' }}
                borderRadius="xl"
                boxShadow="lg"
                p='12px'
            >
                <MotionHeading
                    variants={headingVariants}
                    initial="hidden"
                    animate="visible"
                    mb={6}
                    textAlign="center"
                    fontSize={{ base: '2xl', lg: '4xl' }}
                    fontWeight="bold"
                >
                    Український екологічний антикризовий фонд
                </MotionHeading>
                <Flex
                    direction={{ base: 'column', lg: 'row' }}
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <MotionText
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        mr={{ base: 0, lg: 6 }}
                        mb={{ base: 4, lg: 0 }}
                        maxW={{ base: '100%', lg: '60%' }}
                        textAlign={{ base: 'center', lg: 'left' }}
                        fontSize={{ base: 'xl', lg: '2xl' }}
                        fontWeight="medium"
                    >
                        – це команда однодумців: екологів, екоактивістів, фахівців установ та відомств екологічного напрямку, небайдужих українців, які усвідомлюють усі жахливі наслідки повномасштабної ворожої агресії для екологічної ситуації в Україні.

                        Руйнування екосистем, забруднення ґрунтів та водного простору, зменшення біорізноманіття – це екоцид.

                        Наш фонд – це платформа для всіх, хто займається розробкою та реалізацією різноманітних екологічних проєктів, хто працює на ниві екологічного просвітництва, хто попри усі складнощі та об’єктивне погіршення умов проводить екологічні дослідження.
                    </MotionText>
                    <Box display={'flex'}>
                        <Image
                            display={{ base: 'none', lg: 'block' }}
                            height={'550px'}
                            margin={'0 auto'}
                            mt={'2rem'}
                            src={whowe}
                        />
                    </Box>
                </Flex>
                <Link to="/about">
                    <Btn text='go to about' />
                </Link>

            </Container>
        </Box>
    );
};

export default WhoWe;
