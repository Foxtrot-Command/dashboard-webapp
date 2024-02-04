export const arcParameter = (
  rx,
  ry,
  xAxisRotation,
  largeArcFlag,
  sweepFlag,
  x,
  y,
) => {
  return [
    rx,
    ",",
    ry,
    " ",
    xAxisRotation,
    " ",
    largeArcFlag,
    ",",
    sweepFlag,
    " ",
    x,
    ",",
    y,
  ].join("");
};

// I found this function here: http://jsfiddle.net/wcvrp0mq/
export function generatePath({
  x,
  y,
  width,
  height,
  tr,
  br,
  bl,
  tl,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  tr: number;
  br: number;
  bl: number;
  tl: number;
}) {
  const data: string[] = [];

  // start point in top-middle of the rectangle
  data.push("M" + (x + width / 2) + "," + y);

  // next we go to the right
  data.push("H" + (x + width - tr));

  if (tr > 0) {
    data.push(
      "A" + arcParameter(tr, tr, 0, 0, 1, x + width, (y as number) + tr),
    );
  }

  // next we go down
  data.push("V" + (y + height - br));

  if (br > 0) {
    // now we draw the arc in the lower-right corner
    data.push("A" + arcParameter(br, br, 0, 0, 1, x + width - br, y + height));
  }

  // now we go to the left
  data.push("H" + (x + bl));

  if (bl > 0) {
    // now we draw the arc in the lower-left corner
    data.push("A" + arcParameter(bl, bl, 0, 0, 1, x + 0, y + height - bl));
  }

  // next we go up
  data.push("V" + ((y as number) + tl));

  if (tl > 0) {
    // now we draw the arc in the top-left corner
    data.push("A" + arcParameter(tl, tl, 0, 0, 1, x + tl, (y as number) + 0));
  }

  // and we close the path
  data.push("Z");

  return data.join(" ");
}
