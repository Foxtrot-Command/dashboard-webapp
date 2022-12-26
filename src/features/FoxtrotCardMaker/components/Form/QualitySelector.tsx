import { Flex, Select } from "@chakra-ui/react";
import { WRAPPER_ID } from "features/FoxtrotCardMaker/constants/cards";
import { useCardStore } from "features/FoxtrotCardMaker/stores/CardStore";
import { saveDocumentSize } from "utils";

import DownloadButton from "./DownloadButton";

type Props = {
  imageSelector?: string;
  allowSelectQuality?: boolean;
};
const QualitySelector = ({
  imageSelector = WRAPPER_ID,
  allowSelectQuality = true,
}: Props) => {
  const {
    imageSize,
    cardState,
    loadingState,
    setImageSize,
    setLoading,
    setDownloadQuality,
  } = useCardStore();

  const handleChangeQuality = (quality: number, imageSelector: string) => {
    setDownloadQuality(quality);
    setLoading({ qualityValue: true });
    saveDocumentSize({
      id: imageSelector,
      quality: !allowSelectQuality ? 3 : Number(quality),
    }).then((data) => {
      setImageSize(data);
      setLoading({ qualityValue: false });
    });
  };

  return (
    <Flex mx="auto" w="100%" mt="14px" gap={4}>
      {allowSelectQuality && (
        <Select
          onChange={(
            event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
          ) => handleChangeQuality(Number(event.target.value), imageSelector)}
        >
          <option defaultChecked={true} value="1">
            Calidad Baja
          </option>
          <option value="2">Calidad Media</option>
          <option value="3">Calidad Alta</option>
          <option value="5">Calidad Ultra Alta</option>
        </Select>
      )}

      <DownloadButton
        name={`Guardar (${imageSize})`}
        isLoading={loadingState.qualityValue}
        loadingText="Loading"
        w="100%"
        saveConfig={{
          id: imageSelector,
          name: cardState.name!,
          quality: cardState.downloadQuality,
        }}
      />
    </Flex>
  );
};

export default QualitySelector;
