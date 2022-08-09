// import Link from 'next/link';

// export default function FourOhFour() {
//   return <>
//     <h1>404 - Page Not Found</h1>
//     <Link href="/">
//       <a>
//         Go back home
//       </a>
//     </Link>
//   </>
// }
import Link from 'next/link';
import {
    Box,
    Heading,
    Container,
    Text,
    Button,
    Stack,
    Icon,
    useColorModeValue,
    createIcon,
} from '@chakra-ui/react';

export default function FourOhFour() {
    return <Container maxW={'3xl'}>
        <Stack
            as={Box}
            textAlign={'center'}
            spacing={{ base: 8, md: 12 }}
            py={{ base: 20, md: 36 }}>
            <Heading
                fontWeight={600}
                fontSize={{ base: '4xl', sm: '6xl', md: '8xl' }}
                lineHeight={'50%'}
            >
                404
                <br />
                <Text as={'span'} color={'blue.400'} fontSize={{ base: '1xl', sm: '2xl', md: '4xl' }}>
                    Whoops, our bad...
                </Text>
            </Heading>
            <Text color={'gray.500'} mt='8 !important'>
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable
            </Text>
            <Stack
                direction={'column'}
                spacing={2}
                align={'center'}
                alignSelf={'center'}
                position={'relative'}>
                <Link href='/'><Button
                    colorScheme={'green'}
                    bg={'blue.400'}
                    rounded={'full'}
                    px={6}
                    _hover={{
                        bg: 'blue.500',
                    }}>
                    Go Home
                </Button>
                </Link>
            </Stack>
        </Stack>
    </Container>
}