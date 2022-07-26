export const Attack = ({ children, fontFamily }) =>
    <g id="Attack" transform="translate(0.000000, 885.000000)">
        <image
            id="attack"
            type="MSBitmapLayer"
            x="5" // 30
            y="-20" // 50
            width="250"
            height="260"
            href="/images/parts/stats/attack.png"
        />
        {children &&
            <text
                id="value"
                stroke="#000000"
                strokeWidth="0px"
                fill="#D8D8D8"
                type="MSTextLayer"
                fontFamily={fontFamily || "sans-serif"}
                paintOrder="stroke"
                fontSize="193"
                fontWeight="400"
                letterSpacing="-70px"
            >
                <tspan x={children < 10 ? 75 : 36} y={194} fill="#FFF">
                    {children}
                </tspan>
            </text>}
    </g>;

export default Attack;