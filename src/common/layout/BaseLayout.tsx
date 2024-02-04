import { ReactNode } from "react";

import { Container } from "@chakra-ui/react";

import Navbar from "../components/Navbar";

type BaseLayoutProps = { children: ReactNode };

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <>
      <Navbar />
      <Container maxW="1440px" size="xl" p={{ base: 0, md: 0, sm: 0 }}>
        {children}
      </Container>
    </>
  );
};

export default BaseLayout;
