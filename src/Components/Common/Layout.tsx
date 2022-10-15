import { ReactNode } from "react";

import { Container } from "@chakra-ui/react";

import Navbar from "./Navbar";

type LayoutProps = { children: ReactNode };

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <Container maxW="1440px" size="xl" p={{ base: 0, md: 0, sm: 0 }}>
        {children}
      </Container>
    </>
  );
};

export default Layout;
