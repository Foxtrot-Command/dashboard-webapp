export const factionArr = [
    { name: 'Bushido', isDisabled: false },
    { name: 'Gannicus', isDisabled: true },
    { name: 'Forgotten', isDisabled: false },
    { name: 'Fe Verde', isDisabled: true },
    { name: 'Resistencia', isDisabled: true },
];
export const rarityArr = [
    { name: 'Common', color: '#FFFFFF', isDisabled: false },
    { name: 'Uncommon', color: '#75D24B', isDisabled: false },
    { name: 'Rare', color: '#0755FF', isDisabled: false },
    { name: 'Epic', color: '#F840FF', isDisabled: false },
    { name: 'Legendary', color: '#FFB908', isDisabled: true },
];

export const cardData = [
    {
        name: 'Obliterator',
        description: '<strong>Rage:</strong> deals <strong>2 damage</strong> to all enemies in your lane.',
        stats: {
            mana: 8,
            attack: 5,
            health: 5
        },
        faction: "Forgotten",
        rarity: "Epic",
        image: "/images/obliterator.jpg"
    },
    {
        name: 'Feast Time',
        description: 'Summon <strong>2/1 hyenas</strong> with <strong>rush</strong> for each enemy on your lane',
        stats: {
            mana: 2,
            attack: 0,
            health: 0
        },
        faction: "Forgotten",
        rarity: "Uncommon",
        image: "/images/feast_time.png"
    },
    {
        name: 'Plains Rider',
        description: 'Pierce. Diversion',
        stats: {
            mana: 3,
            attack: 3,
            health: 2
        },
        faction: "Forgotten",
        rarity: "Common",
        image: "/images/plains_rider.jpg"
    },
    {
        name: 'Dunkan Forger',
        description: '<strong>Rage:</strong> grants "+1/+1" to an ally of this lane.',
        stats: {
            mana: 3,
            attack: 2,
            health: 3
        },
        faction: "Forgotten",
        rarity: "Common",
        image: "/images/dunkan_forger.jpg"
    }
]