import { Box } from '@chakra-ui/layout';
import ForumSvg from '../../assets/svg/forum-logo.svg';

export const ForumIcon = () => {
  return (
    <Box as="span" display={'inline-block'} w={'140px'}>
      <img src={ForumSvg} alt="Forum icon" />
    </Box>
  );
};
