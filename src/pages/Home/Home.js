import {
  Button, Container, Flex, Text, VStack
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

function Home({onClick}) {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex h="100vh" py="20">
        <VStack w="full" h="full" p={10} spacing={10} bg="gray.50">
          <Text fontSize="3xl">Welcome to React Seed</Text>
          <Button onClick={onClick} data-testid="redirect-button">
            Go to login page
          </Button>
        </VStack>
      </Flex>
    </Container>
  );
}

Home.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Home;
