import React from 'react';
import { Button } from '@chakra-ui/react';
import { captureHtmlAndSavePng } from 'common/helper';

const SavePartnershipButton = () => {
  return (
    <Button
      ml={4}
      h="auto"
      onClick={() =>
        captureHtmlAndSavePng({
          id: 'partnership_identifier',
          name: 'partner',
        })
      }
    >
      Guardar partnership
    </Button>
  );
};

export default SavePartnershipButton;
