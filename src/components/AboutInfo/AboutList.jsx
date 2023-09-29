import { Grid, GridItem, Image, Text } from '@chakra-ui/react';
import aboutImg from '../../assets/img/about-info-test.png';

const AboutList = () => {
  return (
    <Grid as={'ul'} templateColumns="repeat(3, 1fr)" textAlign={'center'}>
      <GridItem>
        <Image
          src={aboutImg}
          margin={'0 auto'}
          mb={'12px'}
          width={'100px'}
          height={'100px'}
        />
        <Text mb={'8px'} fontWeight={'semibold'} fontSize={'4xl'}>
          290
        </Text>
        <Text textTransform={'uppercase'}>Working Project</Text>
      </GridItem>
      <GridItem>
        <Image
          src={aboutImg}
          margin={'0 auto'}
          mb={'12px'}
          width={'100px'}
          height={'100px'}
        />
        <Text mb={'8px'} fontWeight={'semibold'} fontSize={'4xl'}>
          990
        </Text>
        <Text textTransform={'uppercase'}>Volunteer</Text>
      </GridItem>
      <GridItem>
        <Image
          src={aboutImg}
          margin={'0 auto'}
          mb={'12px'}
          width={'100px'}
          height={'100px'}
        />
        <Text mb={'8px'} fontWeight={'semibold'} fontSize={'4xl'}>
          1800
        </Text>
        <Text textTransform={'uppercase'}>Fund Collect</Text>
      </GridItem>
    </Grid>
  );
};

export default AboutList;
