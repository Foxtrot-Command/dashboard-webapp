import React, { useReducer, useState } from 'react'

const initialState: any = {
    cardName: '',
    faction: 'Bushido',
    rarity: 'Common',
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

const CardContext = React.createContext<any>({ state: initialState })
export default CardContext

export function CardContextProvider({ children }) {

    const [state, dispatch] = useReducer(reducer, initialState);
    const [selectedImage, setSelectedImage] = useState<string | any>(null);
    const [isLoadingContent, setLoadingContent] = useState<boolean>(false);

    return (
        <CardContext.Provider value={{
            state,
            dispatch,
            selectedImage,
            setSelectedImage,
            isLoadingContent,
            setLoadingContent
        }}>
            {children}
        </CardContext.Provider>
    )
}
