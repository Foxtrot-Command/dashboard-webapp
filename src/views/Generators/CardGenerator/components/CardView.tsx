import { Box, BoxProps } from "@chakra-ui/react";
import React, { useContext } from "react";
import { CardContext, EditorCardContext } from "../context";
import LoadingContent from "./LoadingContent";
import draftToHtml from "draftjs-to-html";
import { convertToRaw } from "draft-js";
import {
  Attack,
  CardWrapper,
  Description,
  Frame,
  Health,
  Mana,
  Title,
  Type,
  Image,
} from "components/CardGame";

type Props = BoxProps & {
  showFrame?: boolean;
};

const CardView = ({ showFrame = true }: Props) => {
  const { state, selectedImage, isLoadingContent } = useContext(CardContext);

  const { editorState } = useContext(EditorCardContext);
  return (
    <>
      {isLoadingContent && <LoadingContent />}

      <CardWrapper id="image_final" opacity={isLoadingContent ? 0.4 : 1}>
        <Image image={selectedImage} id="FXD" />

        <Description rich fontFamily="Montserrat">
          {draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        </Description>
        <Title>{state.cardName}</Title>

        {showFrame && (
          <>
            <Frame
              image={`/images/parts/frames/${state.rarity.toLowerCase()}/${state.faction.toLowerCase()}.png`}
            />
            <Mana fontFamily="Inversionz Unboxed">{state.mana}</Mana>
            <Type fontFamily="Inversionz Unboxed">{state.cardType}</Type>

            {state.cardType.toLowerCase() !== "tactic" && (
              <>
                <Health fontFamily="Inversionz Unboxed">{state.health}</Health>
                <Attack fontFamily="Inversionz Unboxed">{state.attack}</Attack>
              </>
            )}
          </>
        )}
      </CardWrapper>
    </>
  );
};

export default CardView;
