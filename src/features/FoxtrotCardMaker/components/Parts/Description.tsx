import { Parser } from "html-to-react";
import { generatePath } from "utils/Svg";

const parser = new Parser();

type Props = {
  children: React.ReactNode;
  rich: boolean;
};

export const Description = ({ children, rich }: Props) => {
  if (rich) {
    return (
      <>
        <svg width={575} height={327} x={99} y={726}>
          <defs>
            <clipPath id="corner-path">
              <path
                d={generatePath({
                  x: 0,
                  y: 0,
                  width: 575,
                  height: 327,
                  tr: 0,
                  br: 40,
                  bl: 40,
                  tl: 0,
                })}
                fill="none"
                stroke="#000000"
                strokeWidth={10}
              />
            </clipPath>
          </defs>

          <rect
            width={581}
            height={327}
            clipPath={"url(#corner-path)"}
            style={{
              fill: "rgba(0,0,0, 0.5)",
            }}
          />
        </svg>

        <foreignObject x={210} y={750} width={375} height={220} display="block">
          <div
            className="text-container"
            style={{
              textAlign: "center",
              height: "100%",
              width: "100%",
              fontSize: 31,
              lineHeight: "initial",
            }}
          >
            {parser.parse(
              `<div class="text" style="vertical-align: middle; height: 100%; font-family: Montserrat">
            ${children}
            </div>`
            )}
          </div>
        </foreignObject>
      </>
    );
  }
  return (
    <text x={130} y={826} width={520} height={230} fontFamily="serif">
      {children}
    </text>
  );
};

export default Description;
