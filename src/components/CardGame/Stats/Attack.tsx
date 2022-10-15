export const Attack = ({ children, fontFamily }) => {
  const handleAmountPosition = (amount: number) => {
    if (amount === 11) return 50;
    if (amount >= 10) return 36;
    if (amount === 7) return 83;
    return 75;
  };

  return (
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
      {children !== undefined && (
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
          <tspan x={handleAmountPosition(children)} y={194} fill="#FFF">
            {children}
          </tspan>
        </text>
      )}
    </g>
  );
};

export default Attack;
