"use client";

import { ROLES } from "common/constants/authentication";
import { CardBoxElement, Section } from "./components";
import { RELEASE_STATUS } from "./constants/tools";

const Data = () => {
  return (
    <Section title="Manipulación de datos">
      <CardBoxElement
        identifier="DDBB"
        title="Datos de cartas"
        text={RELEASE_STATUS.WIP}
        link="/backoffice/cards"
        allowedRolesList={[ROLES.ADMIN, ROLES.CARD_MANAGER]}
      />
    </Section>
  );
};

export default Data;
