export const Health = ({ children, fontFamily }) =>
    <g id="Health" transform="translate(598.000000, 885.000000)">
        <image
            id="health"
            type="MSBitmapLayer"
            x="-10"
            y="50"
            width="179"
            height="177"
            href="/images/parts/stats/health.png"
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
                <tspan x={children < 10 ? 26 : -13} y={192} fill="#FFF">
                    {children}
                </tspan>
            </text>}
    </g>;
    
export default Health;