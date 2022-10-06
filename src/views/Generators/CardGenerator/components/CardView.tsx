import { Box, BoxProps } from '@chakra-ui/react';
import { Image, Attack, CardWrapper, Description, Frame, Health, Mana, Title, Type } from 'Components/CardGame';
import React, { useContext } from 'react'
import { CardContext, EditorCardContext } from '../context';
import LoadingContent from './LoadingContent';
import draftToHtml from 'draftjs-to-html';
import { convertToRaw } from "draft-js";

type Props = BoxProps & {}

const CardView = ({ ...props }: Props) => {
  const {
    state,
    selectedImage,
    isLoadingContent,
  } = useContext(CardContext)

  const { editorState } = useContext(EditorCardContext);
  return (
    <>
      {isLoadingContent && <LoadingContent />}

      <CardWrapper id="image_final" opacity={isLoadingContent ? 0.4 : 1}>
        <Image image={selectedImage} id="FXD" clip />
        <Frame image={`/images/parts/frames/${state.rarity.toLowerCase()}/${state.faction.toLowerCase()}.png`} />
        <Mana fontFamily="Inversionz Unboxed">{state.mana}</Mana>
        <Type fontFamily="Inversionz Unboxed">{state.cardType}</Type>

        {state.cardType.toLowerCase() !== 'tactic' &&
          <>
            <Health fontFamily="Inversionz Unboxed">{state.health}</Health>
            <Attack fontFamily="Inversionz Unboxed">{state.attack}</Attack>
          </>
        }

        <Title fontFamily="Montserrat" flow>{state.cardName}</Title>
        <Description rich fontFamily="Montserrat">
          {draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        </Description>
      </CardWrapper>

    </>
  )
}

export default CardView
