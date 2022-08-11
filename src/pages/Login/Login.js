import {useState} from 'react';
import PropTypes from 'prop-types';
import {
  Button, Container, Flex, Input, Text, VStack
} from '@chakra-ui/react';

function Login({login, isLoggingIn, hasError}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Container maxW="container.xl" p={0}>
      <Flex h="100vh" py="20">
        <VStack w="full" h="full" p={10} spacing={10} bg="gray.50">
          <Text fontSize="3xl" data-testid="title">Login</Text>
          <Input
            placeholder="Username"
            size="md"
            onChange={e => setUsername(e.target.value)}
            value={username}
            data-testid="username"
          />
          <Input
            type="password"
            placeholder="Password"
            size="md"
            onChange={e => setPassword(e.target.value)}
            value={password}
            data-testid="password"
          />
          <Button
            onClick={() => login({username, password})}
            data-testid="login-button"
            isLoading={isLoggingIn}
            loadingText="Loading"
            disabled={!username || !password}
          >
            Login
          </Button>
          {hasError && <Text color="red.500">Login failed</Text>}
        </VStack>
      </Flex>
    </Container>
  );
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isLoggingIn: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired
};

export default Login;
