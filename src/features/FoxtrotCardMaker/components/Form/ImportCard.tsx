import { useEffect, useState } from "react";

import {
  Badge,
  Box,
  Button,
  Flex,
  Input,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { calculateDocumentSize } from "common/helper";
import { ContentState, EditorState } from "draft-js";
import { WRAPPER_ID } from "features/FoxtrotCardMaker/constants/cards";
import { useCardStore } from "features/FoxtrotCardMaker/stores/CardStore";
import {
  TCardFaction,
  TCardRarity,
  TCardType,
} from "features/FoxtrotCardMaker/types/cards";
import { cardData } from "features/FoxtrotCardMaker/utils/cardData";
import shallow from "zustand/shallow";
import AssetsService from "common/services/graphql/AssetsService";

let htmlToDraft: any = null;
if (typeof window === "object") {
  htmlToDraft = require("html-to-draftjs").default;
}

const ImportCard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchValue, setSearchValue] = useState("");

  const {
    cardList,
    downloadQuality,
    setCardState,
    setLoading,
    setImageSize,
    setEditorState,
    getCardsList
  } = useCardStore(
    (state) => ({
      cardList: state.cardList,
      downloadQuality: state.cardState.downloadQuality,
      setCardState: state.setCardState,
      setLoading: state.setLoading,
      setImageSize: state.setImageSize,
      setEditorState: state.setEditorState,
      getCardsList: state.getCardsList
    }),
    shallow,
  );

  const handleImportSelection = (index: number) => {
    onClose();

    setTimeout(() => {
      setLoading({ cardContent: true });
      const { name, descriptionPretty, settings, art } = cardList[index];

      if(!settings) return;

      const { faction, rarity, type, stats} = settings;

      setCardState({
        name: name,
        stats: {
          mana: Number(stats?.mana),
          attack: Number(stats?.attack),
          health: Number(stats?.health),
        },
        faction: faction?.name?.toLowerCase().replace('the ', '') as TCardFaction,
        rarity: rarity?.name?.toLowerCase() as TCardRarity,
        type: type?.[0]?.name?.toLowerCase() as TCardType,
        downloadQuality: downloadQuality,
        selectedImage: art?.imageRoute,
        isFirstEdition: false,
      });

      setLoading({ qualityValue: true });
      calculateDocumentSize({
        id: WRAPPER_ID,
        quality: downloadQuality,
      }).then((data) => {
        setImageSize("0mb");
        setLoading({ qualityValue: false });
      });

      const contentBlock = htmlToDraft(descriptionPretty);
      if (contentBlock) {
        const contentState = ContentState.createFromBlockArray(contentBlock);
        const editorState = EditorState.createWithContent(contentState);
        setEditorState(editorState);
      }

      setTimeout(() => {
        setLoading({ cardContent: false });
      }, 1000);
    }, 200);
  };

  useEffect(() => {
    if (cardList.length === 0) {
      getCardsList();
    }

  }, [])

  const filteredCardData = cardList.filter((content: any) => {
    return (
      content.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      content.faction.toLowerCase().includes(searchValue.toLowerCase())
    );
  });

  return (
    <>
      <Modal blockScrollOnMount={true} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay id="import-modal" />
        <ModalContent>
          <ModalHeader>Lista de Cartas</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              name="searchCard"
              autoComplete="off"
              type="search"
              placeholder="Busca por nombre de carta"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setSearchValue(event.target.value)
              }
            ></Input>
            <Flex direction="column" gap={2} mt={4} overflowY="auto" maxHeight="500px">
              {filteredCardData.map(({ name, settings }, index: number) => (
                <Box
                  key={index}
                  background="whiteAlpha.200"
                  borderRadius={6}
                  py={2}
                  px={4}
                  _hover={{
                    background: "whiteAlpha.300",
                    cursor: "pointer",
                  }}
                  onClick={() => handleImportSelection(index)}
                >
                  <Flex direction="row" justifyContent="space-between">
                    <Box>{name}</Box>
                    <Box>
                      <Badge variant="subtle" colorScheme="red" mr={2}>
                        EN
                      </Badge>
                      <Badge variant="outline" colorScheme="success">
                        {settings?.faction?.name}
                      </Badge>
                    </Box>
                  </Flex>
                </Box>
              ))}
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <InputRightElement width="4.8rem" mr={1}>
        <Button h="1.5rem" size="sm" onClick={onOpen}>
          Importar
        </Button>
      </InputRightElement>
    </>
  );
};

export default ImportCard;
