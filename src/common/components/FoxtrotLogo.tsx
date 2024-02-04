import React from 'react'
import { Box, Image, ImageProps } from '@chakra-ui/react'

type Props = ImageProps & {
  center?: boolean;
}

const FoxtrotLogo = (props: Props) => {

  const { center = false, ...restProps } = props;
  return (
    <Box display={center ? "flex" : 'inline'}
      justifyContent="center" alignItems="center"
      pointerEvents="none"
      userSelect="none"
    >
      <Image alt="Foxtrot Logo Large"
        width={{ base: 155, md: 307 }}
        src="/foxtrot_logo.svg"
        {...restProps}
      />
    </Box>
  )
}

export default FoxtrotLogo
