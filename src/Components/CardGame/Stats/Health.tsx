export const Health = ({ children, fontFamily }) => {

  const handleAmountPosition = (amount: number) => {
    if (amount === 11) return 1;
    if (amount >= 10) return -13;
    if (amount === 7) return 34;
    return 26;
  }

  return (
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
      {children !== undefined &&
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
          <tspan x={handleAmountPosition(children)} y={192} fill="#FFF">
            {children}
          </tspan>
        </text>}
    </g>
  )
}

export default Health;
