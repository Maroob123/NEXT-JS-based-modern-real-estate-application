import { Box } from '@chakra-ui/layout';
import { useColorModeValue } from "@chakra-ui/react";

const Footer = () => (
  <Box textAlign='center' p='5' color={useColorModeValue('gray.600', 'gray.200')} borderTop='1px' borderColor='gray.100'>
    © 2021 Yourplace, Inc.
  </Box>
);

export default Footer;