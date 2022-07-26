import { 
    FormControl, 
    GridItem, 
    FormLabel, 
    NumberInput, 
    NumberInputField, 
    NumberInputStepper, 
    NumberIncrementStepper, 
    NumberDecrementStepper 
} from '@chakra-ui/react'
import React, { useState } from 'react'

const InputMaker = ({ value, label, onChange }) => (
    <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel
            htmlFor="last_name"
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
                color: "gray.50",
            }}
        >
            {label}
        </FormLabel>
        <NumberInput
            size="sm"
            defaultValue={1}
            max={15}
            min={0}
            clampValueOnBlur={false}
            value={value}
            key={label}
            onChange={onChange}
        >
            <NumberInputField />
            <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
            </NumberInputStepper>
        </NumberInput>
    </FormControl>
)

const StatsInput = (): any => {

    const [mana, setMana] = useState(1);
    const [health, setHealth] = useState(1);
    const [attack, setAttack] = useState(1);

    return {
        stats: {
            mana,
            health,
            attack
        },
        component: () => (
            <>
                <InputMaker value={mana} label="mana" onChange={(e: any) => setMana(e)} />
                <InputMaker value={health} label="health" onChange={(e: any) => setHealth(e)} />
                <InputMaker value={attack} label="attack" onChange={(e: any) => setAttack(e)} />
            </>
        )
    }
}

export default StatsInput