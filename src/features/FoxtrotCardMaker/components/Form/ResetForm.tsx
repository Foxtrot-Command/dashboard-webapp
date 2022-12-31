import { Box, BoxProps, IconButton } from '@chakra-ui/react'
import { shallowEqual } from 'common/utils'
import { initialCardState, useCardStore } from 'features/FoxtrotCardMaker/stores/CardStore'
import React from 'react'
import { FaTrash } from 'react-icons/fa'
import shallow from 'zustand/shallow'

type Props = BoxProps & {}

const ResetForm = (props: Props) => {

  const { cardState, resetState } = useCardStore((state) => ({
    cardState: state.cardState,
    resetState: state.resetState
  }), shallow);

  const handleStateStatus = shallowEqual(cardState, initialCardState);

  return (
    <Box {...props}
      my="auto"
      position="absolute"
      top={0} right={0}
      px={4}
      py={2}
      backgroundColor="whiteAlpha.200"
      borderRightRadius={8}
      borderBottomLeftRadius={8}
      borderBottomRightRadius={0}
      disabled={handleStateStatus}
      variant="glossy"
      onClick={resetState}
      cursor={!handleStateStatus ? "pointer" : "not-allowed"}
      opacity={!handleStateStatus ? 1 : '0.2'}
    >
      <IconButton
        variant="ghost"
        onClick={resetState}
        color="neutrals.200"
        disabled={handleStateStatus}
        as={FaTrash}
        aria-label={''}
        size="32px"
        pointerEvents="none"
        userSelect="none"
      />
    </Box>
  )
}

export default ResetForm
