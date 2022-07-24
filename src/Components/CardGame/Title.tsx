export const Title = ({ children, fontFamily, flow }) =>
    <g>


        {children &&
            <text
                x="400"
                y="115"
                fontSize="40px"
                textAnchor="middle"
                fill="white"
                stroke="black"
                strokeWidth="0px"
                paintOrder="stroke"
                letterSpacing="0px"
                fontFamily={fontFamily || "sans-serif"}
                fontWeight="600"
            >
                {children}
            </text>}
    </g>;
export default Title;