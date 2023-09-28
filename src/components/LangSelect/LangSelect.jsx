import { Box, Flex, Image } from "@chakra-ui/react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import engFlag from '../../assets/Image/eng.png';
import ukrFlag from '../../assets/Image/ua.png';

export const dataLang = [
    { name: "ENG", value: engFlag, key: 'en' },
    { name: "UKR", value: ukrFlag, key: 'ua' },
];

const LangSelect = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { i18n } = useTranslation();


    const query = searchParams.get('lang') || '';
    const currentLanguage = i18n.language;


    useEffect(() => {
        i18n.changeLanguage(query);
    }, [i18n, query]);

    const handleSelectChange = (event) => {
        const selectedLanguage = event.target.value;

        setSearchParams({ lang: selectedLanguage });
    };

    return (
        <Flex>
            <Image src={dataLang.find(lang => lang.key === currentLanguage)?.value} boxSize='35px' objectFit='cover' />
            <Box />
            <Box as="select" border='none'
                background='transparent'
                fontSize='16px'
                outline='none' value={currentLanguage} onChange={handleSelectChange} >
                {dataLang.map(lang => (
                    <Box as="option" background='rgba(0, 0, 0, 0.5)'
                        color='white' key={lang.key} value={lang.key}>{lang.name}</Box>
                ))}
            </Box>
        </Flex>
    );
};

export default LangSelect;
