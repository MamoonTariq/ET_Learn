import React, { useState } from "react";
import { Formik, ErrorMessage } from "formik";
import ValidationSchema from "../../Common/LoginValidation";
import { useTranslation } from "react-i18next";

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
  Heading,
} from "@chakra-ui/react";

const Login = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const renderError = (message) => <p className="help is-danger">{message}</p>;
  const { t: LT } = useTranslation();
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={ValidationSchema}
        onSubmit={(values) => {
          console.log(values, "onsubmitting");
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <Container maxW="container.xl">
              <Heading m="5">{LT("login")}</Heading>
              <Grid mb="30">
                <GridItem>
                  <FormControl id="email">
                    <FormLabel>{LT("email")}</FormLabel>
                    <Input
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="email"
                    />
                    <ErrorMessage name="email" render={renderError} />
                  </FormControl>
                </GridItem>
              </Grid>
              <Grid mb="30">
                <GridItem></GridItem>
                <FormControl id="password">
                  <FormLabel>{LT("password")}</FormLabel>
                  <InputGroup size="md">
                    <Input
                      pr="4.5rem"
                      id="password"
                      type={show ? "text" : "password"}
                      name="password"
                      placeholder="Enter password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <ErrorMessage name="password" render={renderError} />
                </FormControl>
              </Grid>
              <Button colorScheme="blue" type="submit" disabled={isSubmitting}>
                {LT("login")}
              </Button>
            </Container>
          </form>
        )}
      </Formik>
    </>
  );
};
export default Login;
