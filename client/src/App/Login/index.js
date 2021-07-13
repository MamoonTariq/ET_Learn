import React, { useState } from "react";
import {
  Container,
  FormControl,
  FormLabel,
  InputGroup,
  Input,
  Grid,
  GridItem,
  InputRightElement,
  Button,
} from "@chakra-ui/react";

const Login = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <Container maxW="container.xl">
        <Grid mb="30">
          <GridItem>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
          </GridItem>
        </Grid>
        <Grid mb="30">
          <GridItem></GridItem>
          <FormControl id="email">
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
        </Grid>
        <Button colorScheme="blue">Button</Button>
      </Container>
    </>
  );
};
export default Login;
