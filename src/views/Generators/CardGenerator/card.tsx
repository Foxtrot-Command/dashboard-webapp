import React, { useContext } from 'react'

import {
    CardWrapper,
    Frame,
    Mana,
    Image,
    Title,
    Description,
    Attack,
    Health,
    Type
} from "Components/CardGame";
import {
    Box,
    Flex,
    HStack,
    Divider
} from '@chakra-ui/react';

import draftToHtml from 'draftjs-to-html';
import { convertToRaw } from "draft-js";
import CardContext from 'views/Generators/CardGenerator/context/CardContext';
import RaritySelector from 'views/Generators/CardGenerator/components/RaritySelector';
import ImageUpload from './components/ImageUpload';
import QualitySelector from './components/QualitySelector';
import TextEditor from './components/DescriptionEditor';
import EditorCardContext from 'views/Generators/CardGenerator/context/EditorCardContext';
import TypeSelector from './components/TypeSelector';
import NameInput from './components/NameInput';
import LoadingContent from './components/LoadingContent';
import StatsInput from 'views/Generators/CardGenerator/components/StatsInput';
import FactionSelection from './components/FactionSelection';

const CardView = () => {

    const {
        state,
        selectedImage,
        isLoadingContent
    } = useContext(CardContext)

    const { editorState } = useContext(EditorCardContext);

    return (
        <>
            <Flex
                gap="4"
                mt="10px"
                width="100%"
                maxWidth="1280px"
                minH="777px"
                mx="auto"
                justifyContent="center"
                direction={{ base: "column-reverse", md: "row" }}
                px={{ base: 4, md: 4 }}
            >
                <Box w={{ base: "100%", md: "50%" }} mt="0" height="100%" bg="whiteAlpha.100" p="20px" borderRadius={8}>
                    <HStack>
                        <NameInput />
                        <StatsInput />
                    </HStack>

                    <Flex mt={4}>
                        <Box w="50%">
                            <TextEditor />
                        </Box>
                        <Flex direction="column" gap={2} w="50%" px={6}>
                            <ImageUpload />
                            <TypeSelector />
                        </Flex>
                    </Flex>

                    <Flex gap={4} mt="10px"  direction="column" w="100%" position="relative">
                        <FactionSelection/>
                        <RaritySelector />
                    </Flex>
                    <Divider mt="14px" />

                    <QualitySelector />
                </Box>

                <Box
                    h="40%"
                    w="auto"
                    p="40px"
                    bg="whiteAlpha.100"
                    borderRadius={8}
                    position="relative"
                >
                    {isLoadingContent && <LoadingContent />}
                    <Box w={{ base: "50%", md: "100%" }} mx="auto" transition="all .2s ease-in-out" opacity={isLoadingContent ? 0.4 : 1}>
                        <CardWrapper id="image_final">
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
                    </Box>

                </Box>
            </Flex >
        </>


    )
}

export default CardView;