export const Mana = ({ children, fontFamily }) =>
    <g id="ManaCircle" transform="translate(590.000000, -10.000000)">
        <image
            id="ManaCircle"
            type="MSBitmapLayer"
            x="0"
            y="0"
            width="179"
            height="177"
            href="/images/parts/stats/mana.png"
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
                letterSpacing="-70px"
            >
                <tspan x={children < 10 ? 35 : -2} y={145} fill="#FFF">
                    {children}
                </tspan>
            </text>}
    </g>;

export default Mana;