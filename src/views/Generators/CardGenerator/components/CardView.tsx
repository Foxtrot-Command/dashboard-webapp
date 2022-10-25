import React, { useContext } from "react";

import { BoxProps } from "@chakra-ui/react";
import {
  Attack,
  CardWrapper,
  Description,
  Frame,
  Health,
  Image,
  Mana,
  Title,
  Type,
} from "components/CardGame";
import { convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";

import { CardContext, EditorCardContext } from "../context";
import LoadingContent from "./LoadingContent";
import { EditorCardContextType } from "../context/EditorCardContext";

type Props = BoxProps & {
  showFrame?: boolean;
};

const CardView = ({ showFrame = true }: Props) => {
  const { state, selectedImage, isLoadingContent } = useContext(CardContext);

  const { editorState } = useContext(EditorCardContext) as EditorCardContextType;
  return (
    <>
      {isLoadingContent && <LoadingContent />}

      <CardWrapper id="image_final" opacity={isLoadingContent ? 0.4 : 1}>
        <Image image={selectedImage} id="FXD" />

        <Description rich>
          {draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        </Description>
        <Title text={state.cardName} />

        <Type value={state.cardType} />
        {showFrame && (
          <>
            <Frame
              image={`/images/parts/frames/${state.rarity.toLowerCase()}/${state.faction.toLowerCase()}.png`}
            />
            <Mana value={state.mana} />

            {state.cardType.toLowerCase() !== "tactic" && (
              <>
                <Health value={state.health} />
                <Attack value={state.attack} />
              </>
            )}
          </>
        )}
      </CardWrapper>
    </>
  );
};

export default CardView;
