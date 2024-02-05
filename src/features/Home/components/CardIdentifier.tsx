import { Text, Box, Tooltip, Flex, Icon } from '@chakra-ui/react';
import React from 'react'
import { RiAdminLine } from 'react-icons/ri';

type CardIdentifierProps = {
  identifier: string;
  allowedRolesList?: string | Array<string>;
};

const ParsedRolesFragment = (props: Pick<CardIdentifierProps, 'allowedRolesList'>) => {
  const { allowedRolesList } = props;

  if (Array.isArray(allowedRolesList)) {
    return (
      <Box>
        {allowedRolesList.map((role, index) => (
          <Text key={index}>- {role}</Text>
        ))}
      </Box>
    );
  }

  return (
    <Text>
      - {allowedRolesList}
    </Text>
  );
};

const CardIdentifier = (props: CardIdentifierProps) => {
  const { identifier, allowedRolesList } = props;

  return (
    <Box position="absolute" left={4} top={2}>
      <Flex gap={1}>
        {allowedRolesList ?
          <Tooltip label={
            <Flex flexDirection="column">
              <ParsedRolesFragment allowedRolesList={allowedRolesList} />
            </Flex>
          } shouldWrapChildren>
            <Icon as={RiAdminLine} boxSize={5} color="neutrals.100" />
          </Tooltip>
          :
          null
        }

        <Text fontSize="13px" fontWeight="light">
          {identifier}
        </Text>
      </Flex>
    </Box>
  )
}

export default CardIdentifier
