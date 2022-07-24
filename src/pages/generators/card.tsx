import React, { useState } from 'react'

import {
    CardWrapper,
    Frame,
    Mana,
    Image,
    Title,
    Description,
    Attack,
    Health,
    Race
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
    Tooltip
} from '@chakra-ui/react';
import { onCapture, svg_to_png } from 'utils';

import draftToHtml from 'draftjs-to-html';
import dynamic from "next/dynamic"
import { EditorState, convertToRaw } from "draft-js";
const Editor: any = dynamic(
    () => import('react-draft-wysiwyg').then((mod: any) => mod.Editor),
    { ssr: false }
)
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const CardView = () => {

    const [name, setCardName] = useState('');
    const [editorState, setEditorState] = useState<EditorState | any>(EditorState.createEmpty());

    const [selectedFrame, setSelectedFrame] = useState('/images/parts/frames/rare/bushido.png');
    const [isSpell, setIsSpell] = useState<boolean>(false);
    const [active, setActive] = useState<string>('')

    const [rarity, setRarity] = useState<any>('Uncommon')
    const [faction, setFaction] = useState<any>('Bushido')

    const [stats, setStats] = useState<{ Mana: number, Health: number, Attack: number }>({
        Mana: 1,
        Health: 1,
        Attack: 1
    })

    const handleSelection = (e: any) => {
        setSelectedFrame(e);
    }

    const onEditorStateChange = (editorState: any) => {
        setEditorState(editorState)
    }

    const HandleSave = () => {
        svg_to_png('image_final');
    }

    const faction_arr = [
        { name: 'Bushido', isDisabled: false },
        { name: 'Gannicus', isDisabled: true },
        { name: 'Forgotten', isDisabled: false },
        { name: 'Fe Verde', isDisabled: true },
        { name: 'Resistencia', isDisabled: true },
    ];
    const rarity_arr = [
        { name: 'Common', color: '#FFFFFF', isDisabled: false },
        { name: 'Uncommon', color: '#75D24B', isDisabled: false },
        { name: 'Rare', color: '#0755FF', isDisabled: false },
        { name: 'Epic', color: '#F840FF', isDisabled: false },
        { name: 'Legendary', color: '#FFB908', isDisabled: true },
    ];

    const FrameSelector = () => (
        <>
            <Flex direction="column" gap={4}>

                <RadioGroup onChange={setFaction} value={faction}>
                    <Stack direction='row'>
                        {faction_arr.map(({ name, isDisabled }, index: number) => (
                            <Radio value={name} key={index} isDisabled={isDisabled}>{name}</Radio>
                        ))}
                    </Stack>
                </RadioGroup>

                <RadioGroup onChange={setRarity} value={rarity}>
                    <Stack direction='row'>
                        {rarity_arr.map(({ name, color, isDisabled }, index: number) => (
                            <Radio value={name} key={index} isDisabled={isDisabled}>
                                <Tooltip placement="auto" label={rarity}>
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

    return (
        <Flex gap="4" mt="10px" width="100%" maxWidth="1280px" minH="777px" mx="auto" justifyContent="center" >

            <Box w="50%" mt="0" height="100%" bg="whiteAlpha.100" p="20px" borderRadius={8}>
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
                            value={name}
                            onChange={(e) => setCardName(e.target.value)}
                        />

                    </FormControl>
                    <HStack>
                        {["Mana", "Attack", "Health"].map((key, index) => {

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
                                        {key}
                                    </FormLabel>
                                    <NumberInput
                                        size="sm"
                                        defaultValue={1}
                                        max={15}
                                        min={0}
                                        clampValueOnBlur={false}
                                        onChange={(value) => setStats({ ...stats, [key]: value })}
                                    >
                                        <NumberInputField />
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

                <FormControl mt={2}>
                    <FormLabel
                        htmlFor="description"
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                        _dark={{
                            color: "gray.50",
                        }}
                    >
                        Description
                    </FormLabel>

                    <Editor
                        toolbar={{
                            options: ['inline', 'textAlign', 'history'],
                            inline: {
                                inDropdown: false,
                                options: ['bold', 'italic', 'underline', 'strikethrough'],
                            },
                            textAlign: { inDropdown: false },
                            link: { inDropdown: false },
                            history: { inDropdown: false },

                        }}
                        editorState={editorState}
                        toolbarClassName="toolbar-classname"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                        onEditorStateChange={onEditorStateChange}
                    />
                </FormControl>
                <Flex gap={6} mt="10px">

                    <FrameSelector />
                </Flex>
                <Button mt="10px" onClick={() => onCapture('image_final', name)}>Save</Button>
            </Box>
            <Box
                h="50%"
                p="40px"
                bg="whiteAlpha.100"
                borderRadius={8}
            >
                <CardWrapper id="image_final">
                    <Image id="GVG_096" clip />
                    <Frame image={`/images/parts/frames/${rarity.toLowerCase()}/${faction.toLowerCase()}.png`} />
                    <Mana fontFamily="Inversionz Unboxed">{stats.Mana}</Mana>
                    <Race fontFamily="Inversionz Unboxed">Unit</Race>
                    <Health fontFamily="Inversionz Unboxed">{stats.Health}</Health>
                    <Attack fontFamily="Inversionz Unboxed">{stats.Attack}</Attack>
                    <Title fontFamily="Montserrat" flow>{name}</Title>
                    <Description rich fontFamily="Montserrat">
                        {draftToHtml(convertToRaw(editorState.getCurrentContent()))}
                    </Description>
                </CardWrapper>
            </Box>
        </Flex >
    )
}

export default CardView;