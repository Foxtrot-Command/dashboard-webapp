import React, { useContext } from "react";

import { Flex, Select } from "@chakra-ui/react";
import { saveDocumentSize } from "utils";
import CardContext from "views/Generators/CardGenerator/context/CardContext";
import SaveCardContext, { SaveCardContextType } from "views/Generators/CardGenerator/context/SaveCardContext";

import DownloadButton from "./DownloadButton";

type Props = {
  imageSelector?: string;
  allowSelectQuality?: boolean;
}
const QualitySelector = ({
  imageSelector = "image_final",
  allowSelectQuality = true,
}: Props) => {
  const { state, dispatch } = useContext(CardContext);

  const { setLoadingQuality, setDocumentSize, loadingQuality, documentSize } =
    useContext(SaveCardContext) as SaveCardContextType;

  const handleChangeQuality = (
    quality: number | string,
    imageSelector: string
  ) => {
    dispatch({
      type: "cardQuality",
      cardQuality: Number(quality),
    });

    setLoadingQuality(true);
    saveDocumentSize({
      id: imageSelector,
      quality: !allowSelectQuality ? 3 : Number(quality),
    }).then((data) => {
      setDocumentSize(data);
      setLoadingQuality(false);
    });
  };

  return (
    <Flex mx="auto" w="100%" mt="14px" gap={4}>
      {allowSelectQuality && (
        <Select
          onChange={(
            event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
          ) => handleChangeQuality(event.target.value, imageSelector)}
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
        name={`Guardar (${documentSize})`}
        isLoading={loadingQuality}
        loadingText="Loading"
        w="100%"
        saveConfig={{
          id: imageSelector,
          name: state.cardName,
          quality: state.cardQuality,
        }}
      />
    </Flex>
  );
};

export default QualitySelector;
