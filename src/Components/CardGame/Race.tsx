export const Race = ({ children, fontFamily }) =>
    <g id="Race" transform="translate(110.000000, 940.000000)">
        {/* <image
            id="race"
            type="MSBitmapLayer"
            x="0"
            y="0"
            width="529"
            height="106"
        href={require("../static/race.png")}
        /> */}
        {children &&
            <text
                id="Mech"
                stroke="#000000"
                strokeWidth="0px"
                fill="#D8D8D8"
                fontFamily={fontFamily || "sans-serif"}
                paintOrder="stroke"
                fontSize="48"
                fontWeight="400"
            >
                <tspan x="224" y="95" fill="#FFF">
                    {children}
                </tspan>
            </text>}
    </g>;

export default Race;