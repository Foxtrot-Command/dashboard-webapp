import { Button, ButtonProps } from '@chakra-ui/react';
import React from 'react'
import { onCapture } from 'utils';

type SaveImage = {
  id: string;
  name: string;
  quality: number;
}

type Props = ButtonProps & {
  name?: string;
  saveConfig: SaveImage;
}

const DownloadButton = ({ name = "Guardar", saveConfig, ...props }: Props) => {
  return (
    <Button {...props}
      onClick={() => onCapture({
        id: saveConfig.id,
        name: saveConfig.name,
        quality: saveConfig.quality
      }
      )}
    >{name}</Button >
  )
}

export default DownloadButton
