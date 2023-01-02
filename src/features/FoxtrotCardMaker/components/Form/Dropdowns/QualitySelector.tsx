import { Flex, Select } from "@chakra-ui/react";
import { calculateDocumentSize } from "common/utils";
import { WRAPPER_ID } from "features/FoxtrotCardMaker/constants/cards";
import { useCardStore } from "features/FoxtrotCardMaker/stores/CardStore";
import shallow from "zustand/shallow";

import DownloadButton from "features/FoxtrotCardMaker/components/Form/DownloadButton";

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
    cardName,
    downloadQuality,
    loadingQualityContent,
    setDownloadQuality,
    setImageSize,
    setLoading,
  } = useCardStore(
    (state) => ({
      imageSize: state.imageSize,
      cardName: state.cardState.name,
      downloadQuality: state.cardState.downloadQuality,
      loadingQualityContent: state.loadingState.qualityValue,
      setDownloadQuality: state.setDownloadQuality,
      setImageSize: state.setImageSize,
      setLoading: state.setLoading,
    }),
    shallow
  );

  const handleChangeQuality = async (
    quality: number,
    imageSelector: string
  ) => {
    setDownloadQuality(quality);
    setLoading({ qualityValue: true });

    const size = await calculateDocumentSize({
      id: imageSelector,
      quality: !allowSelectQuality ? 3 : Number(quality),
    });

    setImageSize(size);
    setLoading({ qualityValue: false });
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
        isLoading={loadingQualityContent}
        loadingText="Loading"
        w="100%"
        saveConfig={{
          id: imageSelector,
          name: cardName!,
          quality: downloadQuality,
        }}
      />
    </Flex>
  );
};

export default QualitySelector;
