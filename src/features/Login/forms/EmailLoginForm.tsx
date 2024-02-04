'use client';

import React from 'react'
import { Formik, Form, FormikErrors } from 'formik'
import { Button, Flex } from '@chakra-ui/react';
import { IoMailOutline, IoLockClosedOutline } from 'react-icons/io5';
import { useCustomToast } from 'common/hooks/useCustomToast';
import { CTAButton, LoadingSpinner } from 'common/components';
import { FormInputField } from 'common/components/FormInputField';
import { login } from 'common/actions/login';

interface LoginFormValues {
  email: string;
  password: string;
}

const EmailLoginForm = () => {

  const showToast = useCustomToast();

  const initialValues: LoginFormValues = { email: '', password: '' };
  return (
    <Formik
      initialValues={initialValues}
      validate={values => {

        let errors: FormikErrors<LoginFormValues> = {};

        if (!values.password) errors.password = 'Password is required.';
        if (!values.email) errors.email = 'Email is required.';

        if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address'
        }

        return errors
      }}
      onSubmit={async (values, { setSubmitting, setErrors, resetForm }) => {

        const { email, password } = values;
        const res = await login({ email, password })

        if (res !== 'Success') {

          showToast({
            toastTitle: "Authentication Error",
            toastMessage: "Something went wrong, please try again later",
            status: "error"
          })
          setErrors({ email: "Wrong credentials" })
        }

        resetForm({ values: { ...values, password: "" } })
        if (res === 'Success') {
          window.location.replace('/');
        }
        setSubmitting(false);
      }}
    >
      {({ submitForm, handleSubmit, errors, isSubmitting }) => (

        <Form
          onSubmit={(e) => { e.preventDefault(); handleSubmit(e) }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSubmit(e);
            }
          }}
        >
          {isSubmitting ?

            <LoadingSpinner height="auto" />
            :
            <>
              <Flex gap={3} flexDirection="column">
                <FormInputField iconLabel={IoMailOutline} type="email" identifier="email" label="Email" placeholder="Email" />
                <FormInputField iconLabel={IoLockClosedOutline} type="password" identifier="password" label="Password" placeholder="Password" />
              </Flex>

              <Button type="submit"
                width="100%"
                mt={6} height="50px"
                onClick={submitForm}>
                  Log In
                  </Button>

            </>
          }
        </Form>
      )}
    </Formik>
  );
}

export default EmailLoginForm
