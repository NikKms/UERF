import React from 'react';
import { Field, Form, Formik } from 'formik';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export const ContactForm = () => {
  const { t, i18n } = useTranslation();
  console.log(i18n.language);
  return (
    <Formik
      initialValues={{ name: '', phone: '', email: '', message: '' }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          console.log(values);
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {({ isSubmitting, handleSubmit }) => (
        <Box position="relative">
          <Box
            position="absolute"
            backgroundColor="#0088cf"
            top="-8px"
            left="50%"
            right="-8px"
            bottom="50%"
            zIndex="1"
          />
          <Box
            position="absolute"
            backgroundColor="#ffd300"
            top="50%"
            left="-8px"
            right="50%"
            bottom="-8px"
            zIndex="1"
          />
          <Form
            style={{
              position: 'relative',
              backgroundColor: '#fff',
              padding: '40px',
              zIndex: 2,
            }}
          >
            <Heading mb={30}>Подати заявку</Heading>
            <Flex gap="30px" mb="30px" flexWrap="wrap">
              <Field name="name">
                {({ field, form }) => (
                  <FormControl
                    w={{
                      sm: 'calc((100% - 30px) / 2)',
                      lg: 'calc((100% - 60px) / 3)',
                    }}
                  >
                    {/* <FormLabel>{t('contactForm.name')}</FormLabel> */}
                    <Input {...field} placeholder="Ім'я" bgColor="#fff" />
                  </FormControl>
                )}
              </Field>
              <Field name="phone">
                {({ field, form }) => (
                  <FormControl
                    w={{
                      sm: 'calc((100% - 30px) / 2)',
                      lg: 'calc((100% - 60px) / 3)',
                    }}
                  >
                    {/* <FormLabel>Телефон *</FormLabel> */}
                    <Input
                      {...field}
                      placeholder="Телефон *"
                      bgColor="#fff"
                      w="100%"
                    />
                  </FormControl>
                )}
              </Field>
              <Field name="email">
                {({ field, form }) => (
                  <FormControl
                    w={{
                      sm: 'calc((100% - 30px) / 2)',
                      lg: 'calc((100% - 60px) / 3)',
                    }}
                  >
                    {/* <FormLabel>E-mail *</FormLabel> */}
                    <Input {...field} placeholder="Ваш е-mail" bgColor="#fff" />
                  </FormControl>
                )}
              </Field>
            </Flex>
            <Field name="message">
              {({ field, form }) => (
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Текст повідомлення"
                    as="textarea"
                    h={200}
                    rows={7}
                    overflow="hidden"
                    resize="none"
                    pt="15px"
                    pb="15px"
                    bgColor="#fff"
                  />
                </FormControl>
              )}
            </Field>
            <Flex mt="30px">
              <Button
                onSubmit={handleSubmit}
                minW={210}
                bg="linear-gradient(145deg, #06c6b6 0%, #93deb0 100%)"
                borderRadius="30px"
                padding="0 15px"
                height="50px"
                color="#fff"
                isLoading={isSubmitting}
                type="submit"
              >
                Відправити
              </Button>
            </Flex>
          </Form>
        </Box>
      )}
    </Formik>
  );
};
