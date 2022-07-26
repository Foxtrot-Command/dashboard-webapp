export type FramesType = {
    [key: string]: Array<{
        name: string;
        path: string;
        spell?: boolean;
    }>
};

export const frames: FramesType[] = [{
    bushido: [
        {
            name: "Bushido Common",
            path: "/images/parts/frames/common/bushido.png"
        },
        {
            name: "Bushido Uncommon",
            path: "/images/parts/frames/uncommon/bushido.png"
        },
        {
            name: "Bushido Rare",
            path: "/images/parts/frames/rare/bushido.png"
        },
        {
            name: "Bushido Legendary",
            path: "/images/parts/frames/legendary/bushido.png"
        },
        {
            name: "Bushido Legendary Gold",
            path: "/images/parts/frames/legendary/bushido_gold.png"
        }
    ],
    forgotten: [
        {
            name: "Forgotten Common",
            path: "/images/parts/frames/common/forgotten.png"
        },
        {
            name: "Forgotten Common [Spell]",
            path: "/images/parts/frames/common/forgotten_spell.png",
            spell: true
        },
        {
            name: "Forgotten Uncommon",
            path: "/images/parts/frames/uncommon/forgotten.png"
        },
        {
            name: "Forgotten Uncommon [Spell]",
            path: "/images/parts/frames/uncommon/forgotten_spell.png",
            spell: true
        },
        {
            name: "Forgotten Rare",
            path: "/images/parts/frames/rare/forgotten.png"
        },
        {
            name: "Forgotten Legendary",
            path: "/images/parts/frames/legendary/forgotten.png"
        }
    ]
}
]