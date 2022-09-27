import { Flex, Select, Button } from '@chakra-ui/react'
import CardContext from 'views/Generators/CardGenerator/context/CardContext'
import SaveCardContext from 'views/Generators/CardGenerator/context/SaveCardContext'
import React, { useContext } from 'react'
import { onCapture, saveDocumentSize } from 'utils'

const QualitySelector = () => {

    const { state, dispatch } = useContext(CardContext)

    const {
        setLoadingQuality,
        setDocumentSize,
        loadingQuality,
        documentSize
    } = useContext(SaveCardContext);

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

    return (
        <Flex mx="auto" w="100%" mt="14px" gap={4}>

            <Select
                onChange={(event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => handleChangeQuality(event.target.value)}
            >
                <option defaultChecked={true} value='1'>Calidad Baja</option>
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
    )
}

export default QualitySelector
