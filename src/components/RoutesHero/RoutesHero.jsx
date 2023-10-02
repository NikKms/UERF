import { Box, Center, Text } from '@chakra-ui/react';
import WaveText from '../WaveText/WaveText';
import { useTranslation } from 'react-i18next';

// eslint-disable-next-line react/prop-types
const RoutesHero = ({ titlePath, bgImg }) => {
  const linearGradient = `linear-gradient(to top, rgba(6, 7, 7, 0.8),rgba(34, 32, 32, 0.4))`;
  const containerStyle = `${linearGradient}, url(${bgImg}) no-repeat center`;

  const { t } = useTranslation();

  return (
    <Box as="section" flexDirection={'column'} maxW={'full'}>
      <Center
        maxW={'full'}
        background={containerStyle}
        backgroundSize={'cover'}
        height={'600px'}
        flexDirection={'column'}
      >
        <WaveText
          style={{
            fontWeight: '500',
            color: '#fff',
            textTransform: 'uppercase',
          }}
        >
          {t(titlePath)}
        </WaveText>
        <Text
          fontSize={'xl'}
          marginTop={'12px'}
          textAlign={'center'}
          color={'whiteAlpha.900'}
        >
          Lorem ipsum dolor
        </Text>
      </Center>
    </Box>
  );
};

export default RoutesHero;
