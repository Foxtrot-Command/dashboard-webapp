import { CardType } from "features/FoxtrotCardMaker/constants/cards";

type Props = {
  value: any;
};

export const Type = ({ value }: Props) => {
  const typeConfig = {
    [CardType.STRUCTURE]: {
      size: "39px",
      letterSpacing: "-9px",
    },
    [CardType.VEHICLE]: {
      size: "38px",
      letterSpacing: "-6px",
    },
    [CardType.UNIT]: {
      x: 276,
      size: "48px",
      letterSpacing: "-6px",
    },
    [CardType.TACTIC]: {
      size: "40px",
      letterSpacing: "-6px",
    },
    [CardType.SOLDIER]: {
      size: "38px",
      letterSpacing: "-6px",
    },
    [CardType.EQUIPMENT]: {
      size: "39px",
      letterSpacing: "-9px",
    },
  };

  return (
    <svg width={585} height={140} x={111.2} y={936}>
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
        fontSize={typeConfig[value?.toLowerCase()]?.size}
        fontWeight={400}
        letterSpacing={typeConfig[value?.toLowerCase()]?.letterSpacing}
        dominantBaseline="middle"
        textAnchor="middle"
        x={typeConfig[value?.toLowerCase()]?.x ?? 273}
        y={91}
      >
        {value}
      </text>
    </svg>
  );
};

export default Type;
