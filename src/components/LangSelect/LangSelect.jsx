import { Box, Flex, Image, Button } from "@chakra-ui/react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import lang from '../../assets/svg/lang.svg'
import engFlag from '../../assets/img/eng.png';
import ukrFlag from '../../assets/img/ua.png';

export const dataLang = [
    { name: "ENG", value: engFlag, key: 'en', color: 'blue' },
    { name: "UKR", value: ukrFlag, key: 'ua', color: 'green' },
];

const LangSelect = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { i18n } = useTranslation();

    const query = searchParams.get('lang') || '';
    const currentLanguage = i18n.language;

    useEffect(() => {
        i18n?.changeLanguage(query);
    }, [i18n, query]);

    const handleButtonClick = () => {
        const selectedLanguage = currentLanguage === 'en' ? 'ua' : 'en';
        setSearchParams({ lang: selectedLanguage });
    };

    return (
        <Flex alignItems="center" >
            <Button
                display='flex'
                variant='unstyled'
                onClick={handleButtonClick}
            >
                <Box
                    boxSize='35px'
                    backgroundImage={`url(${dataLang.find(lang => lang.key === currentLanguage)?.value})`}
                    backgroundSize="cover"
                    backgroundPosition="center"
                    overflow={'hidden'}
                    mr={1}
                />
                <Box w="25px" h="fit-content"> <img src={lang} /></Box>

            </Button>

        </Flex>
    );
};

export default LangSelect;
