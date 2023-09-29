import React from 'react';
import { Field, Form, Formik } from 'formik';
import { Button, Flex, FormControl, FormLabel, Input } from '@chakra-ui/react';
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
        <Form>
          <Flex gap="30px" mb="30px" flexWrap="wrap">
            <Field name="name">
              {({ field, form }) => (
                <FormControl
                  w={{
                    sm: 'calc((100% - 30px) / 2)',
                    lg: 'calc((100% - 60px) / 3)',
                  }}
                >
                  <FormLabel color="#fff">{t('contactForm.name')}</FormLabel>
                  <Input {...field} placeholder="" bgColor="#fff" />
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
                  <FormLabel color="#fff">Телефон *</FormLabel>
                  <Input
                    {...field}
                    placeholder="+380("
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
                  <FormLabel color="#fff">E-mail *</FormLabel>
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
          <Flex justifyContent="flex-end" mt="30px">
            <Button
              onSubmit={handleSubmit}
              minW={210}
              bg="#23b24b"
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
      )}
    </Formik>
  );
};
