export const Type = ({ children, fontFamily }) =>
    <svg width="585" height="140" x="111" y="937">
        {children && <image
            id="race"
            type="MSBitmapLayer"
            x="187"
            y="58"
            width="178"
            height="65"
            href="/images/parts/stats/placeholder.png"
        />}

        <text
            id="TypeText"
            fill="#D8D8D8"
            fontFamily="Inversionz Unboxed"
            fontSize="40"
            fontWeight="400"
            letterSpacing="-6px"
            dominantBaseline="middle"
            textAnchor="middle"
            x="273"
            y="91"
        >
            {children}
        </text>
    </svg>;

export default Type;