export const Type = ({ children, fontFamily }) =>
    <g id="Type" transform="translate(110.000000, 940.000000)">
        {/* <image
            id="race"
            type="MSBitmapLayer"
            x="0"
            y="0"
            width="529"
            height="106"
        href={require("../static/race.png")}
        /> */}

            <text
                id="Type"
                fill="#D8D8D8"
                fontFamily={fontFamily || "sans-serif"}
                fontSize="40"
                fontWeight="400"
                letterSpacing="-6px"
                dominant-baseline="middle" 
                text-anchor="middle"
            >
                <tspan x="275" y="85" fill="#FFF">
                    {children}
                </tspan>
            </text>
    </g>;

export default Type;