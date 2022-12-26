import { Box, Heading } from "@chakra-ui/react";

type Props = {
  title: string;
  children: React.ReactNode;
};

const Section = ({ title, children }: Props) => (
  <>
    <Box mb={10}>
      <Heading my={4}>{title}</Heading>
      {children}
    </Box>
  </>
);

export default Section;
