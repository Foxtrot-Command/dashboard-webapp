import { Box, BoxProps } from "@chakra-ui/react";

export type BoxFieldsetProps = BoxProps & {
  children: React.ReactNode;
  label: string;
};

export const BoxFieldset = (props: BoxFieldsetProps) => {
  const { label, children, ...restProps } = props;

  return (
    <Box
      as="fieldset"
      border="1px solid"
      borderColor="neutrals.800"
      borderRadius="md"
      p={2}
      marginTop={2}
      {...restProps}
    >
      <Box
        as="legend"
        border="1px solid"
        borderColor="neutrals.800"
        borderRadius="base"
        borderStyle="dotted"
        padding="0.2em 0.8em"
        marginLeft="1em
      "
      >
        {label}
      </Box>
      {children}
    </Box>
  );
};
