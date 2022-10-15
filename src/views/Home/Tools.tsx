import React from "react";

import { Flex } from "@chakra-ui/react";

import { CardBoxElement, Section } from "./components";

const Tools = () => {
  return (
    <Section title="Herramientas">
      <Flex gap={5} flexWrap="wrap" justifyContent="space-between">
        <CardBoxElement
          identifier="Generadores"
          title="Cartas + Redes sociales"
          link="/generators/card"
          color="purple"
          text="Beta V3"
        />

        <CardBoxElement
          identifier="Generadores"
          title="Partnership"
          link="/generators/partnership"
          color="purple"
          text="Beta"
        />

        <CardBoxElement
          identifier="Generadores"
          title="Twitter Space"
          link="/generators/twitter_space"
          color="purple"
          text="Beta"
        />

        <CardBoxElement
          identifier="Generadores"
          title="Documento NDA"
          color="red"
          text="WIP"
        />
      </Flex>
    </Section>
  );
};

export default Tools;
