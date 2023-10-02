import { Box, Text, VStack, Flex } from "@chakra-ui/layout";
import React from "react";
import { useTranslation } from "react-i18next";
import email from '../../assets/svg/email.svg';
import phone from '../../assets/svg/phone.svg';
import { Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const contacts = {
    email: 'email@gmail.com',
    phone: '+380 97-11-11-111'
}

const FooterAbout = () => {
    const { t } = useTranslation()

    return (
        <Box as='div'>
            <VStack color='white' alignItems={"flex-start"}>
                <Text as='h2' fontSize={"xl"} fontWeight={"bold"} mb={'16px'}>{t("footer.about.title")}</Text>
                <Text as='p' fontSize={"md"}>{t("footer.about.adress")}</Text>
                <Flex
                    gap={'8px'}
                    as={motion.div}
                    animate={{ opacity: 1, transition: { duration: 0.3, ease: "easeIn" } }}
                    _hover={{ color: "teal.400" }}
                >
                    <Image src={email} w={'25px'} />
                    <Box as='a' fontSize={"md"} href={`mailto:${contacts.email}`}>{contacts.email}</Box>
                </Flex>
                <Flex
                    gap={'8px'}
                    as={motion.div}
                    animate={{ opacity: 1, transition: { duration: 0.3, ease: "easeIn" } }}
                    _hover={{ color: "teal.400" }}
                >
                    <Image src={phone} w={'25px'} />
                    <Box as='a' fontSize={"md"} href={`tel:${contacts.phone}`}>{contacts.phone}</Box>
                </Flex>
            </VStack>
        </Box>
    );
};

export default FooterAbout;
