import { useCallback, useEffect, useState } from "react";

import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  IconButton,
  Image,
  Input,
  Table,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tooltip,
  Tr,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { CardFaction } from "features/FoxtrotCardMaker/constants/cards";
import { cardData } from "features/FoxtrotCardMaker/utils/cardData";
import { debounce } from "lodash";
import { FaEdit, FaPlus, FaSearch, FaTrash } from "react-icons/fa";

import { FormModal } from "./components/FormModal";

interface IUser {
  id?: string;
  name: string;
  email: string;
  createdAt?: string;
}

export default function CardCRUD() {
  const { colorMode, toggleColorMode } = useColorMode();

  const borderColor = useColorModeValue("gray.200", "gray.600");

  /* const { users, getUsers, deleteUser, totalCount } = useUsers(); */

  const toast = useToast();
  const [page, setPage] = useState(1);
  const [user, setUser] = useState(null);
  const [valueSearch, setValueSearch] = useState("");
  const [isOpenFormModal, setIsOpenFormModal] = useState(false);

  const [cards, setCards] = useState([]);

  const isLgVerison = useBreakpointValue({
    base: false,
    lg: true,
  });

  const isMdVerison = useBreakpointValue({
    base: false,
    md: true,
  });

  const asButton = useBreakpointValue({ base: IconButton, md: Button });

  /* useEffect(() => { getUsers(page) }, [page]) */

  function handleToggleFormModal() {
    setIsOpenFormModal(!isOpenFormModal);
  }

  async function handleCreateUser() {
    setUser(null);
    setIsOpenFormModal(!isOpenFormModal);
  }

  async function handleUpdateUser(user) {
    setUser(user);
    setIsOpenFormModal(!isOpenFormModal);
  }

  /* async function handleDeleteUser(user) {
    await deleteUser(user.id);

    toast({
      description: `Usuário ${user.name} excluído com sucesso.`,
      status: "success",
      position: "top",
      duration: 4000,
      isClosable: true,
    });
  } */

  /* const debouncedSearchUser = useCallback(
    debounce(value => getUsers(page, value), 750)
    , []
  ) */

  /* async function handleSearchUser(value: string) {
    if(value.length >= 3) {
      debouncedSearchUser(value);
    } else if (value.length === 0 ){
      getUsers(1);
    }
  } */

  const fetchData = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const graphql = JSON.stringify({
      query: `
      query Cards {
        cards {
          name
          description
          descriptionPretty
          settings {
            rarity {
              name
            }
            type {
              name
            }
            stats {
              health
              attack
              mana
            }
            faction {
              name
            }
            skills {
              name
            }
          }
          art {
            imageRoute
          }
          createdAt
          updatedAt
        }
      }`,
      variables: {},
    });

    const requestOptions: RequestInit = {
      method: "POST",
      headers: myHeaders,
      body: graphql,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "http://localhost:3000/graphql",
        requestOptions,
      );
      const result = await response.text();
      setCards(JSON.parse(result).data.cards);
    } catch (error) {
      console.log("error", error);
    }
  };

  // Call the fetchData function within your useEffect hook
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Flex w="100%" maxWidth={1220} mx="auto" px="6" my="6" direction="column">
      <Button
        maxWidth={120}
        my="4"
        ml="auto"
        colorScheme="green"
        onClick={toggleColorMode}
      >
        Tema {colorMode === "light" ? "Dark" : "Light"}
      </Button>

      <Box
        flex="1"
        p="4"
        bg={colorMode === "light" ? "white" : "gray.700"}
        borderRadius="md"
      >
        <Heading
          py="2"
          fontSize={["sm", "lg", "xl"]}
          fontWeight="black"
          color={colorMode === "light" ? "gray.600" : "gray.200"}
        >
          Gestión de cartas
        </Heading>

        <Flex justify="space-between" align="center" py="2">
          <Flex
            flex="1"
            direction="row"
            align="center"
            border="1px"
            borderRadius="md"
            borderColor={borderColor}
          >
            <IconButton
              size="sm"
              borderRadius="0"
              aria-label="search-card"
              icon={<Icon as={FaSearch} fontSize="16" />}
              /* onClick={() =>  handleSearchUser(valueSearch)} */
            />

            <Input
              size="sm"
              border="0"
              focusBorderColor="green.500"
              placeholder="Buscar..."
              value={valueSearch}
              onChange={(e) => {
                /*  handleSearchUser(e.target.value) */
                setValueSearch(e.target.value);
              }}
            />
          </Flex>

          <Button
            onClick={handleCreateUser}
            as={asButton}
            ml="4"
            size="sm"
            fontSize="sm"
            colorScheme="green"
            leftIcon={<Icon as={FaPlus} fontSize="16" />}
            /* icon={<Icon as={FaPlus} fontSize="16" />} */
            title="Cadastrar Usuário"
          >
            {isMdVerison && <Text>Nueva carta</Text>}
          </Button>

          <FormModal
            /* user={user} */
            isOpen={isOpenFormModal}
            onClose={handleToggleFormModal}
          />
        </Flex>

        <Box border="1px" borderRadius="sm" borderColor={borderColor}>
          <Table size="sm">
            <Thead bg={colorMode === "light" ? "gray.200" : "gray.600"}>
              <Tr>
                <Th>Imagen</Th>
                <Th>ID</Th>
                {isMdVerison && <Th>Nombre</Th>}
                {isLgVerison && <Th>Ataque</Th>}
                {isLgVerison && <Th>Mana</Th>}
                {isLgVerison && <Th>Defensa</Th>}
                {isLgVerison && <Th>Facción</Th>}
                {isLgVerison && <Th>Descripción [EN]</Th>}
                {isLgVerison && <Th>Descripción [ES]</Th>}
                <Th width="8"></Th>
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              {cards.map((card: any, id) => {
                return (
                  <Tr key={id}>
                    <Td borderColor={borderColor}>
                      <Tooltip
                        variant="unestyled"
                        label={
                          <Image src={card?.art?.imageRoute} height="200px" />
                        }
                      >
                        <Image src={card.art.imageRoute} height="40px" />
                      </Tooltip>
                    </Td>
                    <Td borderColor={borderColor}>{id}</Td>
                    {isMdVerison && (
                      <Td borderColor={borderColor}>{card?.name}</Td>
                    )}
                    {isLgVerison && (
                      <Td borderColor={borderColor}>
                        {card?.settings?.stats?.attack}
                      </Td>
                    )}
                    {isLgVerison && (
                      <Td borderColor={borderColor}>
                        {card?.settings?.stats?.mana}
                      </Td>
                    )}
                    {isLgVerison && (
                      <Td borderColor={borderColor}>
                        {card?.settings?.stats?.health}
                      </Td>
                    )}
                    {isLgVerison && (
                      <Td borderColor={borderColor}>
                        {card?.settings?.faction?.name}
                      </Td>
                    )}
                    {isLgVerison && (
                      <Td borderColor={borderColor}>
                        {card?.description.substring(0, 10)}...
                      </Td>
                    )}
                    {isLgVerison && (
                      <Td borderColor={borderColor}>
                        {card?.description.substring(0, 10)}...
                      </Td>
                    )}
                    <Td borderColor={borderColor}>
                      <Button
                        onClick={() => handleUpdateUser(card)}
                        as={asButton}
                        variant="outline"
                        size="sm"
                        fontSize="sm"
                        leftIcon={<Icon as={FaEdit} fontSize="16" />}
                        /* icon={<Icon as={FaEdit} fontSize="16" />} */
                        title="Editar Usuário"
                      >
                        {isMdVerison && <Text>Editar</Text>}
                      </Button>
                    </Td>
                    <Td borderColor={borderColor}>
                      <Button
                        as={asButton}
                        variant="outline"
                        size="sm"
                        fontSize="sm"
                        leftIcon={<Icon as={FaTrash} fontSize="16" />}
                        /* icon={<Icon as={FaTrash} fontSize="16" />} */
                        title="Borrar carta"
                        /* onClick={() => handleDeleteUser(user)} */
                      >
                        {isMdVerison && <Text>Borrar</Text>}
                      </Button>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>

            {/* { totalCount > 10 && (
              <Tfoot>
                <Tr>
                  <Td colSpan={5}>

                  </Td>
                </Tr>
              </Tfoot>
            )} */}
          </Table>
        </Box>
      </Box>
    </Flex>
  );
}
