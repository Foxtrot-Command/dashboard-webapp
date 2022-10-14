export const Title = ({ children }) => {

  const handleTitleSize = (text) => {
    const size = text.split("").length;
    if(size >= 18) return 34;

    return 38;
  }
  return (
    <svg width={575} height={100} x={100} y={48}>
      <rect width={573} height={90} style={{
        fill: "rgba(0,0,0, 0.5)"
      }} />
      <g>
        {children &&
          <text
            x={265}
            y={50}
            fontSize={`${handleTitleSize(children)}px`}
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
            {children}
          </text>}

      </g>
    </svg>
  )
}
export default Title;
