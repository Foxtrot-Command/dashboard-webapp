import {
  InputRightElement,
  Button,
  Badge,
  Box,
  Flex,
  ModalBody,
  ModalOverlay,
  ModalCloseButton,
  useDisclosure,
  ModalContent,
  Modal,
  Input,
  ModalHeader,
  ModalFooter,
} from "@chakra-ui/react";
import CardContext from "views/Generators/CardGenerator/context/CardContext";
import React, { useContext } from "react";
import { cardData } from "views/Generators/CardGenerator/Utils/RawData";
import { ContentState, EditorState } from "draft-js";
import EditorCardContext from "views/Generators/CardGenerator/context/EditorCardContext";
import SaveCardContext from "../context/SaveCardContext";
import { saveDocumentSize } from "utils";

let htmlToDraft: any = null;
if (typeof window === "object") {
  htmlToDraft = require("html-to-draftjs").default;
}

const ImportCard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchValue, setSearchValue] = React.useState("");
  const { state, setSelectedImage, setLoadingContent, dispatch } =
    useContext(CardContext);

  const { setEditorState } = useContext(EditorCardContext);

  const { setLoadingQuality, setDocumentSize } = useContext(SaveCardContext);

  const handleChangeQuality = (quality: number | string) => {
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
  };

  const handleImportSelection = (index: number) => {
    onClose();

    setTimeout(() => {
      setLoadingContent(true);
      const { name, type, description, stats, faction, rarity, image } =
        cardData[index];
      dispatch({
        type: "multiStatement",
        payload: {
          cardName: name.toUpperCase(),
          mana: stats.mana,
          attack: stats.attack,
          health: stats.health,
          faction: faction,
          rarity: rarity,
          cardType: type ?? "",
        },
      });

      setSelectedImage(image);
      handleChangeQuality(state.cardQuality);

      const contentBlock = htmlToDraft(description);
      if (contentBlock) {
        const contentState = ContentState.createFromBlockArray(contentBlock);
        const editorState = EditorState.createWithContent(contentState);
        setEditorState(editorState);
      }

      setTimeout(() => {
        setLoadingContent(false);
      }, 1000);
    }, 200);
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
