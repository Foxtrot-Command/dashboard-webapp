import { Parser } from "html-to-react";

const parser = new Parser();

export const Description = ({ children, rich, fontFamily }) => {
  if (rich) {
    return (
      <foreignObject
        x="210"
        y="750"
        width="375"
        height="220"
        display="block"
      >
        <div
          className="text-container"
          style={{
            textAlign: "center",
            height: "100%",
            width: "100%",
            fontFamily: "serif",
            fontSize: 31,
            lineHeight: "initial"
          }}
        >
          {parser.parse(
            `<div class="text" style="vertical-align: middle; height: 100%; font-family: ${fontFamily}">${children}</div>`
          )}
        </div>
      </foreignObject>
    );
  }
  return (
    <text
      x="130"
      y="826"
      width="520"
      height="230"
      fontFamily="serif"
    >
      {children}
    </text>
  );
};

export default Description;
