import React from "react";

import { BoxProps } from "@chakra-ui/react";
import LoadingContent from "common/components/LoadingContent";
import { convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
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
} from "features/FoxtrotCardMaker/components/Parts";
import {
  CardType,
  WRAPPER_ID,
} from "features/FoxtrotCardMaker/constants/cards";
import { useCardStore } from "features/FoxtrotCardMaker/stores/CardStore";
import shallow from "zustand/shallow";

type Props = BoxProps & {
  showFrame?: boolean;
};

const CardView = ({ showFrame = true }: Props) => {
  const {
    cardName,
    cardFaction,
    cardRarity,
    cardAttack,
    cardHealth,
    cardMana,
    cardType,
    selectedImage,
    loadingCardContent,
    editorState,
    isFirstEdition,
  } = useCardStore(
    (state) => ({
      loadingCardContent: state.loadingState.cardContent,
      cardName: state.cardState.name,
      cardFaction: state.cardState.faction,
      cardRarity: state.cardState.rarity,
      cardAttack: state.cardState.stats.attack,
      cardHealth: state.cardState.stats.health,
      cardMana: state.cardState.stats.mana,
      cardType: state.cardState.type,
      isFirstEdition: state.cardState.isFirstEdition,
      selectedImage: state.cardState.selectedImage,
      editorState: state.editorState,
    }),
    shallow
  );

  const frameFirstEditionPath = `${isFirstEdition ? '/firstEdition/' : '/'}`;

  return (
    <>
      {loadingCardContent && <LoadingContent />}
      <CardWrapper id={WRAPPER_ID} opacity={loadingCardContent ? 0.4 : 1}>
        <Image image={selectedImage!} id="FXD" />

        <Description rich>
          {editorState
            ? draftToHtml(convertToRaw(editorState?.getCurrentContent()))
            : ""}
        </Description>
        <Title text={cardName?.toUpperCase()} />

        {showFrame && (
          <>
            <Frame
              image={`/images/parts/frames/${cardRarity?.toLowerCase()}${frameFirstEditionPath}${cardFaction?.toLowerCase()}.png`}
            />
            <Mana value={cardMana} />

            {cardType?.toLowerCase() !== CardType.TACTIC && (
              <>
                <Health value={cardHealth} />
                <Attack value={cardAttack} />
              </>
            )}
          </>
        )}
        <Type value={cardType} />
      </CardWrapper>
    </>
  );
};

export default CardView;
