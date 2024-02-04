import { Button, ButtonProps } from "@chakra-ui/react";
import { captureHtmlAndSavePng } from "common/helper";

type SaveImage = {
  id: string;
  name: string;
  quality: number;
};

type Props = ButtonProps & {
  name?: string;
  saveConfig: SaveImage;
};

const DownloadButton = ({ name = "Guardar", saveConfig, ...props }: Props) => {
  return (
    <Button
      {...props}
      onClick={() =>
        captureHtmlAndSavePng({
          id: saveConfig.id,
          name: saveConfig.name,
          quality: saveConfig.quality,
        })
      }
    >
      {name}
    </Button>
  );
};

export default DownloadButton;
