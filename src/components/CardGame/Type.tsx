
type Props = {
  value: string;
}
export const Type = ({ value }: Props) => {
  const typeConfig = {
    structure: {
      size: "39px",
      letterSpacing: "-9px",
    },
    vehicle: {
      size: "38px",
      letterSpacing: "-6px",
    },
    unit: {
      x: 276,
      size: "48px",
      letterSpacing: "-6px",
    },
    tactic: {
      size: "40px",
      letterSpacing: "-6px",
    },
  };

  return (
    <svg width={585} height={140} x={111} y={937}>
      {value && (
        <image
          id="race"
          type="MSBitmapLayer"
          x={187}
          y={58}
          width={178}
          height={65}
          href="/images/parts/stats/placeholder.png"
        />
      )}

      <text
        id="TypeText"
        fill="#D8D8D8"
        fontFamily="Inversionz Unboxed"
        fontSize={typeConfig[value.toLowerCase()]?.size}
        fontWeight={400}
        letterSpacing={typeConfig[value.toLowerCase()]?.letterSpacing}
        dominantBaseline="middle"
        textAnchor="middle"
        x={typeConfig[value.toLowerCase()]?.x ?? 273}
        y={91}
      >
        {value}
      </text>
    </svg>
  );
};

export default Type;
