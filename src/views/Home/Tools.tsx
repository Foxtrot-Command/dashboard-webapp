import { Flex } from '@chakra-ui/react'
import React from 'react'
import { CardBoxElement, Section } from './components'

const Tools = () => {
  return (
    <Section title="Herramientas">
      <Flex gap={5} flexWrap="wrap" justifyContent="space-between">
        <CardBoxElement identifier="Generadores" title="Cartas" link="/generators/card" color="purple" text="Beta V2" />
        <CardBoxElement identifier="Generadores" title="Partnership" link="/generators/partnership" color="purple" text="Beta" />
        <CardBoxElement identifier="Generadores" title="Post redes sociales" color="red" text="WIP" />
        <CardBoxElement identifier="Generadores" title="Documento NDA" color="red" text="WIP" />
      </Flex>
    </Section>
  )
}

export default Tools