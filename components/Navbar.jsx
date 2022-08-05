import {
  Box,
  Flex,
  HStack,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
} from '@chakra-ui/react';
import Link from 'next/link';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';

const Links = [{
  navTitle: 'Home',
  navHref: '/'
}, {
  navTitle: 'Search',
  navHref: '/search'
}, {
  navTitle: 'Buy Property',
  navHref: '/search?purpose=for-sale'
}, {
  navTitle: 'Rent Property',
  navHref: '/search?purpose=for-rent'
}];


export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg={useColorModeValue('white', 'gray.900')} px={4} borderBottom='1px' borderColor={useColorModeValue('gray.100', 'blackAlpha.700')}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Button
          size={'md'}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        >
          {isOpen ? <GrClose /> : <GiHamburgerMenu />}
        </Button>

        <HStack spacing={10} alignItems={'center'}>
          <Box fontSize='3xl' color='blue.400' fontWeight='bold' mb='2'>
            <Link href='/' paddingLeft='2' >Yourplace</Link>
          </Box>
          <HStack
            as={'nav'}
            spacing={8}
            display={{ base: 'none', md: 'flex' }}
            >
            {Links.map((link) => (
              <Link
                px={2}
                py={1}
                rounded={'md'}
                _hover={{
                  textDecoration: 'none',
                  bg: useColorModeValue('gray.700', 'gray.200'),
                }}
                href={link.navHref}
                key={link.navTitle}>
                {link.navTitle}
              </Link>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems={'center'}>
          <Button onClick={toggleColorMode} variant='ghost'>
            {colorMode === 'light' ? <MdDarkMode size={20} /> : <MdLightMode size={20} />}
          </Button>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {Links.map((link) => (
              <Link
                px={2}
                py={1}
                _hover={{
                  textDecoration: 'none',
                  bg: useColorModeValue('gray.200', 'gray.700'),
                }}
                href={link.navHref}
                key={link.navTitle}>
                {link.navTitle}
              </Link>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}