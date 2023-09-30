import { Box, Flex, Button, useColorModeValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import engFlag from '../../assets/svg/eng.svg';
import ukrFlag from '../../assets/svg/ua.svg';

export const dataLang = [
    { name: "ENG", value: engFlag, key: 'en', color: 'blue' },
    { name: "UKR", value: ukrFlag, key: 'ua', color: 'green' },
];

const LangSelect = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { i18n } = useTranslation();
    const [isFlipped, setIsFlipped] = useState(false);

    const query = searchParams.get('lang') || '';
    const currentLanguage = i18n.language;

    useEffect(() => {
        i18n?.changeLanguage(query);
    }, [i18n, query]);

    const handleButtonClick = () => {
        const selectedLanguage = currentLanguage === 'en' ? 'ua' : 'en';
        setIsFlipped(!isFlipped);
        setSearchParams({ lang: selectedLanguage });
    };

    return (
        <Flex alignItems="center">
            <Button
                variant='unstyled'
                onClick={handleButtonClick}
            >
                <Box
                    boxSize={35}
                    borderRadius='md'
                    overflow='hidden'
                    transformstyle='preserve-3d'
                    transition='transform 0.5s'
                    transform={`rotateY(${isFlipped ? 180 : 0}deg)`}
                >
                    <Box
                        w='100%'
                        h='100%'
                        backfacevisibility='hidden'
                        background={`url(${dataLang.find(lang => lang.key === currentLanguage)?.value})`}
                        backgroundSize='cover'
                        backgroundPosition='center'
                        borderRadius='md'
                        transform='rotateY(0deg)'
                    />
                    <Box
                        w='100%'
                        h='100%'
                        position='absolute'
                        backfacevisibility='hidden'
                        background={`url(${dataLang.find(lang => lang.key !== currentLanguage)?.value})`}
                        backgroundSize='cover'
                        backgroundPosition='center'
                        borderRadius='md'
                        transform='rotateY(180deg)'
                    />
                </Box>

            </Button>
        </Flex>
    );
};

export default LangSelect;
