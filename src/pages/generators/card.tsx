import React, { ChangeEvent, useReducer, useState } from 'react'

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
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Image as ChakraImage,
    GridItem,
    HStack,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Radio,
    RadioGroup,
    Stack,
    Tooltip,
    InputRightElement,
    InputGroup,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
    Select,
    Text,
    Badge,
    Center,
    Spinner,
    Divider
} from '@chakra-ui/react';
import { capitalize, onCapture, saveDocumentSize } from 'utils';

import draftToHtml from 'draftjs-to-html';
import dynamic from "next/dynamic"
import { EditorState, convertToRaw, ContentState } from "draft-js";

const Editor = dynamic<EditorProps>(
    () => import('react-draft-wysiwyg').then((mod: any) => mod.Editor),
    { ssr: false }
)
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";


let htmlToDraft: any = null;
if (typeof window === 'object') {
    htmlToDraft = require('html-to-draftjs').default;
}

import { PlusSquareIcon } from '@chakra-ui/icons';
import { EditorProps } from 'react-draft-wysiwyg';
import { cardData, factionArr, rarityArr } from 'Components/CardGenerator/Utils/RawData';
import { Notify } from 'notiflix';

const Loading = () => (
    <Center alignSelf="center" h="100%" position="absolute"
        top={0}
        bottom={0}
        left={0}
        right={0}
        m="auto">

        <Spinner
            m="auto"
            thickness='4px'
            speed='0.65s'
            emptyColor='primary.200'
            color='primary.500'
            size='xl'
        />
    </Center>
)

const CardView = () => {

    const [editorState, setEditorState] = useState<EditorState | any>(EditorState.createEmpty());

    const onEditorStateChange = (editorState: any) => {
        setEditorState(editorState)
    }

    const [selectedImage, setSelectedImage] = useState<string | any>(null);
    const [isLoadingContent, setLoadingContent] = useState<boolean>(false);
    const [documentSize, setDocumentSize] = useState<string>("0 MB");
    const [loadingQuality, setLoadingQuality] = useState<boolean>(false);

    const initialState: any = {
        cardName: '',
        faction: 'Bushido',
        rarity: 'Common',
        searchValue: '',
        mana: 1,
        attack: 1,
        health: 1,
        cardType: '',
        cardQuality: 1
    }

    function reducer(state, action) {
        switch (action.type) {
            case 'rarity':
                return { ...state, rarity: action.rarity };
            case 'faction':
                return { ...state, faction: action.faction };
            case 'cardName':
                return { ...state, cardName: action.cardName };
            case 'searchValue':
                return { ...state, searchValue: action.searchValue };
            case 'mana':
                return { ...state, mana: action.mana };
            case 'attack':
                return { ...state, attack: action.attack };
            case 'health':
                return { ...state, health: action.health };
            case 'cardType':
                return { ...state, cardType: action.cardType };
            case 'cardQuality':
                return { ...state, cardQuality: action.cardQuality };
            case 'multiStatement':
                return { ...state, ...action.payload };
            default:
                throw new Error();
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const FrameSelector = () => (
        <>
            <Flex direction="column" gap={4} w="100%" position="relative">

                <RadioGroup onChange={(value) => dispatch({ type: 'faction', faction: value })} value={state.faction}>
                    <HStack flexWrap="wrap">
                        {factionArr.map(({ name, isDisabled }, index: number) => (
                            <Radio value={name} key={index} isDisabled={isDisabled}>{name}</Radio>
                        ))}
                    </HStack>
                </RadioGroup>

                <RadioGroup onChange={(value) => dispatch({ type: 'rarity', rarity: value })} value={state.rarity}>
                    <Stack direction='row'>
                        {rarityArr.map(({ name, color, isDisabled }, index: number) => (
                            <Radio value={name} key={index} isDisabled={isDisabled}>
                                <Tooltip placement="auto" label={name}>
                                    <Box w="32px" h="32px" bg={color} borderRadius={4}>
                                    </Box>

                                </Tooltip>
                            </Radio>
                        ))}
                    </Stack>
                </RadioGroup>
            </Flex>
        </>
    )

    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleImportSelection = (index: number) => {
        setLoadingContent(true)
        const { name, type, description, stats, faction, rarity, image } = cardData[index]
        dispatch({
            type: 'multiStatement',
            payload: {
                cardName: name.toUpperCase(),
                mana: stats.mana,
                attack: stats.attack,
                health: stats.health,
                faction: faction,
                rarity: rarity,
                cardType: type ?? '',
                searchValue: ''
            }
        })

        setSelectedImage(image)
        handleChangeQuality(state.cardQuality)

        const contentBlock = htmlToDraft(description);
        if (contentBlock) {
            const contentState = ContentState.createFromBlockArray(contentBlock);
            const editorState = EditorState.createWithContent(contentState);
            setEditorState(editorState)
        }

        onClose()
        setTimeout(() => {
            setLoadingContent(false)
        }, 1000)
    }

    const filteredCardData = cardData.filter((content: any) => {
        return content.name.toLowerCase().includes(state.searchValue.toLowerCase());
    });

    const handleChangeQuality = (quality: number | string) => {
        dispatch({
            type: 'cardQuality',
            cardQuality: Number(quality)
        })

        setLoadingQuality(true);
        saveDocumentSize({
            id: 'image_final',
            quality: Number(quality)
        }).then(data => {
            setDocumentSize(data)
            setLoadingQuality(false);
        })
    }


    const imageHandler = (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {

        if (event.target instanceof HTMLInputElement && event.target.files) {

            if (!event.target.files[0].type.match('image.*')) {
                return Notify.failure('Prueba con otro tipo de imagen');
            }

            let reader = new FileReader();

            reader.onload = function (e: any) {
                setSelectedImage(e.target.result);
            };

            reader.readAsDataURL(event.target.files[0]);
        }
    }

    return (
        <>
            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay id="import-modal" />
                <ModalContent>
                    <ModalHeader>Lista de Cartas</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Input
                            type="search"
                            placeholder="Busca por nombre de carta"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => dispatch(
                                { type: 'searchValue', searchValue: event.target.value }
                            )}>
                        </Input>
                        <Flex direction="column" gap={2} mt={4}>
                            {filteredCardData.map(({ name }, index: number) => (
                                <>
                                    <Button onClick={() => handleImportSelection(index)}>
                                        {name}
                                        <Box position="absolute" right={4} top={2}>
                                            <Badge variant='subtle' colorScheme="red" mr={2}>EN</Badge>

                                            <Badge variant='subtle' colorScheme="orange">Test</Badge>
                                        </Box>
                                    </Button>
                                </>
                            ))}
                        </Flex>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Cerrar
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

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
                        <FormControl as={GridItem} colSpan={[6, 3]}>
                            <FormLabel
                                htmlFor="card_name"
                                fontSize="sm"
                                fontWeight="md"
                                color="gray.700"
                                _dark={{
                                    color: "gray.50",
                                }}
                            >
                                Nombre de carta
                            </FormLabel>
                            <InputGroup size='md'>
                                <Input
                                    type="text"
                                    name="first_name"
                                    id="first_name"
                                    autoComplete="given-name"
                                    mt={1}
                                    focusBorderColor="brand.400"
                                    shadow="sm"
                                    size="sm"
                                    w="full"
                                    rounded="md"
                                    value={state.cardName}
                                    onChange={(e) => dispatch({ type: 'cardName', cardName: e.target.value.toUpperCase() })}
                                />
                                <InputRightElement width='4.8rem' mr={1}>
                                    <Button h='1.5rem' size='sm' onClick={onOpen}>
                                        Importar
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <HStack>
                            {["mana", "attack", "health"].map((key, index) => {

                                return (
                                    <FormControl as={GridItem} colSpan={[6, 3]} key={index}>
                                        <FormLabel
                                            htmlFor="last_name"
                                            fontSize="sm"
                                            fontWeight="md"
                                            color="gray.700"
                                            _dark={{
                                                color: "gray.50",
                                            }}
                                        >
                                            {capitalize(key)}
                                        </FormLabel>
                                        <NumberInput
                                            size="sm"
                                            defaultValue={1}
                                            max={15}
                                            min={0}
                                            clampValueOnBlur={false}
                                            value={state[key]}
                                            onChange={(value) => dispatch({ type: key, [key]: value })}
                                        >
                                            <NumberInputField borderRadius={6} />
                                            <NumberInputStepper>
                                                <NumberIncrementStepper />
                                                <NumberDecrementStepper />
                                            </NumberInputStepper>
                                        </NumberInput>
                                    </FormControl>
                                )
                            })}
                        </HStack>
                    </HStack>

                    <Flex mt={4}>
                        <Box w="50%">

                            <Box >
                                <Editor

                                    toolbar={{
                                        options: ['inline', 'textAlign', 'history'],
                                        inline: {
                                            inDropdown: false,
                                            options: ['bold', 'italic', 'underline', 'strikethrough']
                                        },
                                        textAlign: { inDropdown: false },
                                        link: { inDropdown: false },
                                        history: { inDropdown: false },

                                    }}
                                    editorState={editorState}
                                    toolbarClassName="editor-toolbar"
                                    wrapperClassName="editor-wrapper"
                                    editorClassName="editor-box"
                                    onEditorStateChange={onEditorStateChange}
                                />
                            </Box>
                        </Box>
                        <Flex direction="column" gap={2} w="50%" px={6}>
                            <Box
                                as="label"
                                className="custom-file-upload"
                                htmlFor="image-importer"
                                h="auto"
                            >
                                <Box
                                    bg="whiteAlpha.200"
                                    px={2}
                                    py={3}
                                    borderRadius={6}
                                    _hover={{
                                        bg: "whiteAlpha.300"
                                    }}
                                >
                                    <Flex
                                        direction="row"
                                        gap={6}
                                        justifyContent="space-between">

                                        <Box as={Flex} gap={2} my="auto">
                                            <PlusSquareIcon my="auto" />
                                            <Text>Subir imagen</Text>
                                        </Box>

                                        {selectedImage ? <ChakraImage
                                            src={selectedImage}
                                            w="32px"
                                            h="32px"
                                            alt="base image"
                                            objectFit='cover'
                                            justifyContent="flex-end"
                                            borderRadius={6}

                                        /> :
                                            <Box w="32px" h="32px"
                                                background="neutrals.500"
                                                borderRadius={6} position="relative">
                                            </Box>}
                                    </Flex>
                                </Box>

                                <Input id="image-importer" type="file" onChange={(event: React.ChangeEvent<HTMLInputElement>) => { imageHandler(event); }}>
                                </Input>
                            </Box>
                            <Select
                                placeholder='Sin tipo'
                                onChange={(event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => dispatch({
                                    type: 'cardType',
                                    cardType: event.target.value
                                })}
                            >
                                <option value='Unit'>Unit</option>
                                <option value='Vehicle'>Vehicle</option>
                                <option value='Structure'>Structure</option>
                                <option value='Tactic'>Tactic</option>
                            </Select>
                        </Flex>
                    </Flex>

                    <Flex gap={6} mt="10px">
                        <FrameSelector />
                    </Flex>
                    <Divider mt="14px" />

                    <Flex mx="auto" w="100%" mt="14px" gap={4}>

                        <Select
                            onChange={(event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => handleChangeQuality(event.target.value)}
                        >
                            <option selected value='1'>Calidad Baja</option>
                            <option value='2'>Calidad Media</option>
                            <option value='3'>Calidad Alta</option>
                            <option value='5'>Calidad Ultra Alta</option>
                        </Select>
                        <Button
                            isLoading={loadingQuality}
                            loadingText='Loading'
                            w="100%"
                            onClick={() => onCapture(
                                {
                                    id: 'image_final',
                                    name: state.cardName,
                                    quality: state.cardQuality
                                }
                            )}>Guardar ({documentSize})</Button>

                    </Flex>
                </Box>

                <Box
                    h="40%"
                    w="auto"
                    p="40px"
                    bg="whiteAlpha.100"
                    borderRadius={8}
                    position="relative"
                >
                    {isLoadingContent && <Loading />}
                    <Box w={{ base: "50%", md: "100%" }} mx="auto" transition="all .2s ease-in-out" opacity={isLoadingContent ? 0.4 : 1}>
                        <CardWrapper id="image_final">
                            <Image image={selectedImage} id="GVG_096" clip />
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