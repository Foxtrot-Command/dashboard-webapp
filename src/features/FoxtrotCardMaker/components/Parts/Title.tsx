type Props = {
  text: string | undefined;
};

export const Title = ({ text }: Props) => {
  const handleTitleSize = (text: string) => {
    const size = text.split("").length;
    if (Number(size) >= 18) return 34;

    return 38;
  };
  return (
    <svg width={575} height={100} x={100} y={48}>
      <rect
        width={573}
        height={90}
        style={{
          fill: "rgba(0,0,0, 0.5)",
        }}
      />
      <g>
        {text && (
          <text
            x={265}
            y={50}
            fontSize={`${handleTitleSize(text)}px`}
            textAnchor="middle"
            alignmentBaseline="middle"
            fill="white"
            stroke="black"
            strokeWidth="0px"
            paintOrder="stroke"
            letterSpacing="0px"
            fontFamily="Montserrat"
            fontWeight={700}
          >
            {text}
          </text>
        )}
      </g>
    </svg>
  );
};
export default Title;
