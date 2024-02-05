import { ReactNode } from "react";

import { Container } from "@chakra-ui/react";

type BaseLayoutProps = { children: ReactNode };

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <>
      <Container maxW="1440px" size="xl" p={{ base: 0, md: 0, sm: 0 }}>
        {children}
      </Container>
    </>
  );
};

export default BaseLayout;
