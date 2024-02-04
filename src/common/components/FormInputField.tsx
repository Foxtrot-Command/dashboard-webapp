'use client';

import React from 'react';
import { Field, FieldProps } from 'formik';
import { InputField } from 'common/components/InputField';
import { Text, Box, Flex, FormLabel, Icon, InputProps, InputGroup, InputRightElement, Tooltip } from '@chakra-ui/react';
import { IconType } from 'react-icons';

export type FormInputFieldProps = {
  identifier: string;
  type: "email" | "password" | "text";
  label: string;
  placeholder?: string;
  iconLabel?: IconType
  iconInput?: IconType
  iconOnClick?: () => void;
  iconInputTooltip?: React.ReactNode;
  showError?: boolean;
} & InputProps;


export const FormInputField = (props: FormInputFieldProps) => {

  const { identifier, type, label, placeholder,
    iconLabel,
    iconInput,
    iconOnClick,
    iconInputTooltip,
    showError = true, ...restProps
  } = props;

  return (
    <Field name={identifier}>
      {({ field, form, meta }: FieldProps) => (
        <Flex flexDirection="column" gap={3} width="100%">
          <FormLabel
            htmlFor={identifier}
            mb={-2}
            fontSize="16px"
            display="flex"
            flexDirection="row"
            gap={1}>
            {iconLabel && <Icon as={iconLabel} height="100%" opacity={0.5} my="auto" />}
            <Text>{label}</Text>
          </FormLabel>

          <InputGroup>
            <InputField
              {...field}
              variant="outline"
              id={identifier}
              type={type}
              placeholder={placeholder}
              isInvalid={meta.touched && meta.error}
              errorBorderColor='crimson'
              {...restProps}
            />

            {iconInputTooltip ?
              <Tooltip variant="elegant" label={iconInputTooltip} placement="top" hasArrow>
                {iconInput ? <InputRightElement>
                  <Icon
                    cursor="pointer"
                    as={iconInput}
                    onClick={iconOnClick}
                  />
                </InputRightElement> : null}
              </Tooltip>
              :
              <>
                {iconInput ?
                <InputRightElement>
                  <Icon
                    cursor="pointer"
                    as={iconInput}
                    onClick={iconOnClick}
                  />
                </InputRightElement> : null}
              </>}
          </InputGroup>

          {
            meta.touched &&
            meta.error &&
            showError &&
            <Box fontSize="14px" mt={-2} color="crimson" className="error">
              {meta.error}
            </Box>
          }

        </Flex>
      )}
    </Field>
  );
};
