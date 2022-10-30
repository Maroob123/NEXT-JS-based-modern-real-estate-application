import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image'
import { Flex, Box, Text, Icon, useColorModeValue } from '@chakra-ui/react';
import { BsFilter } from 'react-icons/bs';

import PropertySet from '../components/propertySet';
import SearchFilters from '../components/SearchFilters';
import { baseUrl, fetchApi } from '../utils/fetchApi';
import noresult from '../assets/images/noresult.svg'

const Searchl = ({ properties }) => {
  const [filtersSearch, setFiltersSearch] = useState(false);
  const router = useRouter();

  return (
    <Box>
      <Flex
        onClick={() => setFiltersSearch(!filtersSearch)}
        cursor='pointer'
        bg={useColorModeValue('gray.100', 'gray.900')}
        borderBottom='1px'
        borderColor={useColorModeValue('gray.100', 'blackAlpha.600')}
        p='2'
        fontWeight='black'
        fontSize='lg'
        justifyContent='center'
        alignItems='center'
      >
        <Text>Search Property By Filters</Text>
        <Icon paddingLeft='2' w='7' as={BsFilter} />
      </Flex>
      {filtersSearch && <SearchFilters />}
      <Text fontSize='2xl' p='4' fontWeight='bold' maxW={'7xl'} m={'auto'}>
        Properties {router.query.purpose}
      </Text>
      <Flex flexWrap='wrap' justifyContent={'center'}  maxW={'7xl'} m={'auto'}>
        {properties.map((propertyItem) => <PropertySet propertyDt={propertyItem} key={propertyItem.id} />)}
      </Flex>
      {properties.length === 0 && (
        <Flex justifyContent='center' alignItems='center' flexDir='column' marginTop='5' marginBottom='5'>
          <Image src={noresult} loading="lazy" alt="no-result-image"/>
          <Text fontSize='xl' marginTop='3'>No Results Found.</Text>
        </Flex>
      )}
    </Box>
  );
};

export async function getServerSideProps({ query }) {
  const purpose = query.purpose || 'for-rent';
  const rentFrequency = query.rentFrequency || 'yearly';
  const minPrice = query.minPrice || '0';
  const maxPrice = query.maxPrice || '1000000';
  const roomsMin = query.roomsMin || '0';
  const bathsMin = query.bathsMin || '0';
  const sort = query.sort || 'price-desc';
  const areaMax = query.areaMax || '35000';
  const locationExternalIDs = query.locationExternalIDs || '5002';
  const categoryExternalID = query.categoryExternalID || '4';

  const data = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`);

  return {
    props: {
      properties: data?.hits,
    },
  };
}

export default Searchl ;