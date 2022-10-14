import { generatePath } from "utils/Svg";

export const BottomRectangle = () =>
  <svg width={575} height={327} x={99} y={726}>

    <defs>
      <clipPath id="corner-path">
        <path d={generatePath({
          x: 0,
          y: 0,
          width: 575,
          height: 327,
          tr: 0,
          br: 40,
          bl: 40,
          tl: 0
        })} fill="none" stroke="#000000" strokeWidth="10" />
      </clipPath>
    </defs>

    <rect width={581} height={327} clipPath={"url(#corner-path)"} style={{
      fill: "rgba(0,0,0, 0.5)"
    }} />
  </svg>;
