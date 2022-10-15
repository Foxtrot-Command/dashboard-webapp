import { useContext, useEffect } from "react";
import { saveDocumentSize } from "utils";
import CardContext from "../context/CardContext";
import SaveCardContext from "../context/SaveCardContext";

export async function useHandleQualityChange(quality: number | string) {
  const { dispatch } = useContext(CardContext);

  const { setLoadingQuality, setDocumentSize } = useContext(SaveCardContext);

  dispatch({
    type: "cardQuality",
    cardQuality: Number(quality),
  });

  setLoadingQuality(true);

  saveDocumentSize({
    id: "image_final",
    quality: Number(quality),
  }).then((data) => {
    setDocumentSize(data);
    setLoadingQuality(false);
  });
}

export default useHandleQualityChange;
