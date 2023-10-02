import { Box, Text, VStack } from "@chakra-ui/layout";
import React from "react";
import { useTranslation } from "react-i18next";

const FooterAbout = () => {
    const { t } = useTranslation()

    return <Box as='div'>
        <VStack color='white'>
            <Text as='h2' fontSize={"xl"}>{t("footer.about.title")}</Text>
            <Text as='p'>{t("footer.about.adress")}</Text>
            <Text as='p'>email@gmail.com</Text>
            <Text as='p'>+380 97-11-11-111</Text>
        </VStack>
    </Box >
};

export default FooterAbout;
