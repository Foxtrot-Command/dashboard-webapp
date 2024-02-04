import { useState } from "react";

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

let htmlToDraft: any = null;
if (typeof window === "object") {
  htmlToDraft = require("html-to-draftjs").default;
}

const ImportCard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchValue, setSearchValue] = useState("");

  const {
    downloadQuality,
    setCardState,
    setLoading,
    setImageSize,
    setEditorState,
  } = useCardStore(
    (state) => ({
      downloadQuality: state.cardState.downloadQuality,
      setCardState: state.setCardState,
      setLoading: state.setLoading,
      setImageSize: state.setImageSize,
      setEditorState: state.setEditorState,
    }),
    shallow,
  );

  const handleImportSelection = (index: number) => {
    onClose();

    setTimeout(() => {
      setLoading({ cardContent: true });
      const { name, type, description, stats, faction, rarity, image } =
        cardData[index];

      setCardState({
        name: name,
        stats: {
          mana: Number(stats.mana),
          attack: stats.attack,
          health: stats.health,
        },
        faction: faction.toLowerCase() as TCardFaction,
        rarity: rarity.toLowerCase() as TCardRarity,
        type: type?.toLowerCase() as TCardType,
        downloadQuality: downloadQuality,
        selectedImage: image,
        isFirstEdition: false,
      });

      setLoading({ qualityValue: true });
      calculateDocumentSize({
        id: WRAPPER_ID,
        quality: downloadQuality,
      }).then((data) => {
        setImageSize(data);
        setLoading({ qualityValue: false });
      });

      const contentBlock = htmlToDraft(description);
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

  const getCardsData = async () => {
    const query = `
    query Decks {
      cards {
        id,
        name,
        descriptionPretty,
        season,
        art {
            imageRoute,
            modelRoute
        },
        settings {
          type {
              name,
              description
          },
          skills {
                description,
                name
          }
          stats {
              mana,
              attack,
              health
          },
           rarity {
               name,
               color
           },
           faction {
               name,
               description,
               color
           }
        }
      }
  }`;

    const response = await fetch("https://graphql.foxtrotcommand.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query,
      }),
    });
    return response.json();
  };

  const filteredCardData = cardData.filter((content: any) => {
    return (
      content.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      content.faction.toLowerCase().includes(searchValue.toLowerCase())
    );
  });

  return (
    <>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
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
            <Flex direction="column" gap={2} mt={4}>
              {filteredCardData.map(({ name, faction }, index: number) => (
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
                        {faction}
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
