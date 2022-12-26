type Props = {
  value: number;
};
export const Health = ({ value }: Props) => {
  const handleAmountPosition = (amount: number) => {
    if (Number(amount) === 11) return 1;
    if (Number(amount) >= 10) return -13;
    if (Number(amount) === 7) return 34;
    return 26;
  };

  return (
    <g id="Health" transform="translate(598.000000, 885.000000)">
      <image
        id="health"
        type="MSBitmapLayer"
        x={-10}
        y={50}
        width={179}
        height={177}
        href="/images/parts/stats/health.png"
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
          fontSize={193}
          fontWeight={400}
          letterSpacing="-70px"
        >
          <tspan x={handleAmountPosition(value)} y={192} fill="#FFF">
            {value}
          </tspan>
        </text>
      )}
    </g>
  );
};

export default Health;
