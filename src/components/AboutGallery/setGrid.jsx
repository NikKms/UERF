import { GridItem } from '@chakra-ui/react';

// eslint-disable-next-line react/prop-types
const SetGrid = ({ index, children }) => {
  let colStart = 0;
  let colEnd = 0;

  switch (index) {
    case 0:
      colStart = 1;
      colEnd = 3;
      break;
    case 5:
      colStart = 3;
      colEnd = 5;
      break;
    case 6:
      colStart = 1;
      colEnd = 3;
      break;
    case 7:
      colStart = 3;
      colEnd = 5;
      break;
    default:
      break;
  }

  return (
    <GridItem colStart={{ lg: colStart }} colEnd={{ lg: colEnd }}>
      {children}
    </GridItem>
  );
};

export default SetGrid;
