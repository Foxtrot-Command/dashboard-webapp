import { Select } from '@chakra-ui/react'
import React, { useContext } from 'react'
import CardContext from '../context/CardContext'

const TypeSelector = () => {

    const { state, dispatch } = useContext(CardContext);

    return (
        <Select
            placeholder='Sin tipo'
            defaultValue={state.cardType}
            onChange={(event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => dispatch({
                type: 'cardType',
                cardType: event.target.value
            })}
        >
            <option selected={state.cardType === 'unit'} value='Unit'>Unit</option>
            <option selected={state.cardType === 'vehicle'} value='Vehicle'>Vehicle</option>
            <option selected={state.cardType === 'structure'} value='Structure'>Structure</option>
            <option selected={state.cardType === 'tactic'} value='Tactic'>Tactic</option>
        </Select>
    )
}

export default TypeSelector