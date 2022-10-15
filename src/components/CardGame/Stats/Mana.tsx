
type Props = {
  value: number;
}
export const Mana = ({ value }: Props) => {
  const handleAmountPosition = (amount: number) => {
    if (amount === 11) return 10;
    if (amount === 7) return 43;
    if (amount >= 10) return -2;
    return 35;
  };

  return (
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
      {value !== undefined && (
        <text
          id="value"
          stroke="#000000"
          strokeWidth="0px"
          fill="#D8D8D8"
          type="MSTextLayer"
          fontFamily="Inversionz Unboxed"
          paintOrder="stroke"
          fontSize="193"
          letterSpacing="-70px"
        >
          <tspan x={handleAmountPosition(value)} y={145} fill="#FFF">
            {value}
          </tspan>
        </text>
      )}
    </g>
  );
};

export default Mana;
