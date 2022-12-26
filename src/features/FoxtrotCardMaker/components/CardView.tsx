import { BoxProps } from "@chakra-ui/react";
import LoadingContent from "components/LoadingContent";
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

type Props = BoxProps & {
  showFrame?: boolean;
};

const CardView = ({ showFrame = true }: Props) => {
  const { cardState, loadingState, editorState } = useCardStore();
  return (
    <>
      {loadingState.cardContent && <LoadingContent />}

      <CardWrapper id={WRAPPER_ID} opacity={loadingState.cardContent ? 0.4 : 1}>
        <Image image={cardState.selectedImage!} id="FXD" />

        <Description rich>
          {editorState
            ? draftToHtml(convertToRaw(editorState?.getCurrentContent()))
            : ""}
        </Description>
        <Title text={cardState?.name} />

        {showFrame && (
          <>
            <Frame
              image={`/images/parts/frames/${cardState.rarity}/${cardState.faction}.png`.toLowerCase()}
            />
            <Mana value={cardState.stats.mana} />

            {cardState.type?.toLowerCase() !== CardType.TACTIC && (
              <>
                <Health value={cardState.stats.health} />
                <Attack value={cardState.stats.attack} />
              </>
            )}
          </>
        )}
        <Type value={cardState.type} />
      </CardWrapper>
    </>
  );
};

export default CardView;
