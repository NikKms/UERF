import React, { useEffect, useState } from 'react';
import { Field, Form, Formik } from 'formik';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
// import { ForumIcon } from '../../common/icons/ForumIcon';
import { object, string, number } from 'yup';

export const ContactForm = () => {
  const { t, i18n } = useTranslation();

  const contactSchema = object({
    name: string().required('contactForm.ErrorMessages.errorName'),
    email: string()
      .email('contactForm.ErrorMessages.emailIsNotCorrect')
      .required('contactForm.ErrorMessages.errrorEmail'),
    phone: string()
      .matches(/^[+0-9-]+$/, 'contactForm.ErrorMessages.phoneIsNotCorrect')
      .required('contactForm.ErrorMessages.errorPhone'),
    message: string(),
  });

  return (
    <Formik
      initialValues={{ name: '', phone: '', email: '', message: '' }}
      validationSchema={contactSchema}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          // console.log(values);
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {({ isSubmitting, handleSubmit, errors, touched }) => (
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
              padding: '30px',
              zIndex: 2,
            }}
          >
            <Heading
              mb={30}
              textTransform="uppercase"
              as="h3"
              fontSize="30px"
              color="#003d7c"
            >
              Подати заявку
            </Heading>
            <Flex gap="30px" mb="30px" flexWrap="wrap">
              <Field name="name">
                {({ field, form }) => (
                  <FormControl
                    w={{
                      base: '100%',
                      sm: 'calc((100% - 30px) / 2)',
                      lg: 'calc((100% - 60px) / 3)',
                    }}
                    isInvalid={errors.name}
                  >
                    {/* <FormLabel>{t('contactForm.name')}</FormLabel> */}
                    <Input {...field} placeholder="Ім'я" bgColor="#fff" />
                    {errors.name && touched.name ? (
                      <FormErrorMessage>{t(errors.name)}</FormErrorMessage>
                    ) : null}
                  </FormControl>
                )}
              </Field>
              <Field name="phone">
                {({ field, form }) => (
                  <FormControl
                    w={{
                      base: '100%',
                      sm: 'calc((100% - 30px) / 2)',
                      lg: 'calc((100% - 60px) / 3)',
                    }}
                    isInvalid={errors.phone}
                  >
                    {/* <FormLabel>Телефон *</FormLabel> */}
                    <Input
                      {...field}
                      placeholder="Телефон *"
                      bgColor="#fff"
                      w="100%"
                    />
                    {errors.phone && touched.phone ? (
                      <FormErrorMessage>{t(errors.phone)}</FormErrorMessage>
                    ) : null}
                  </FormControl>
                )}
              </Field>
              <Field name="email">
                {({ field, form }) => (
                  <FormControl
                    w={{
                      base: '100%',
                      sm: 'calc((100% - 30px) / 2)',
                      lg: 'calc((100% - 60px) / 3)',
                    }}
                    isInvalid={errors.email}
                  >
                    {/* <FormLabel>E-mail *</FormLabel> */}
                    <Input {...field} placeholder="Ваш е-mail" bgColor="#fff" />
                    {console.log(errors.email)}
                    {errors.email && touched.email ? (
                      <FormErrorMessage>{t(errors.email)}</FormErrorMessage>
                    ) : null}
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
            <Flex mt="30px" justifyContent="space-between">
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
