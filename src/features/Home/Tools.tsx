"use client";

import { Flex } from "@chakra-ui/react";

import { CardBoxElement, Section } from "./components";
import { RELEASE_STATUS } from "./constants/tools";

const Tools = () => {
  return (
    <Section title="Herramientas">
      <Flex gap={5} flexWrap="wrap" justifyContent="space-between">
        <CardBoxElement
          identifier="Generadores"
          title="Cartas + Redes sociales"
          link="/generators/card"
          text={RELEASE_STATUS.STABLE}
        />

        <CardBoxElement
          identifier="Generadores"
          title="Partnership"
          link="/generators/partnership"
          text={RELEASE_STATUS.STABLE}
        />

        <CardBoxElement
          identifier="Generadores"
          title="Twitter Space"
          link="/generators/twitter_space"
          text={RELEASE_STATUS.BETA}
        />

        <CardBoxElement
          identifier="Generadores"
          title="Documento NDA"
          text={RELEASE_STATUS.WIP}
        />
        <CardBoxElement
          identifier="Generadores"
          link="/generators/watermark"
          title="Marca de agua"
          text={RELEASE_STATUS.BETA}
        />
      </Flex>
    </Section>
  );
};

export default Tools;
