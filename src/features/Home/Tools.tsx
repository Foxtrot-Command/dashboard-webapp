"use client";

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
          color="blue"
          text="ESTABLE"
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
        <CardBoxElement
          identifier="Generadores"
          link="/generators/watermark"
          title="Marca de agua"
          color="purple"
          text="Beta"
        />
      </Flex>
    </Section>
  );
};

export default Tools;
