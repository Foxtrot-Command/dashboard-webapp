import CardContext from 'views/Generators/CardGenerator/context/CardContext'
import React, { useContext } from 'react'

export default function useCardContext () {
    const {state} = useContext<any>(CardContext)
    return state;
}