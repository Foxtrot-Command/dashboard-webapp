type Props = {
  image: string;
};

export const Frame = ({
  image = "/images/parts/frames/uncommon/bushido.png",
}: Props) => (
  <image
    id="mNeutral"
    type="MSBitmapLayer"
    x={0}
    y={0}
    width={764}
    height={1100}
    href={image}
  />
);

export default Frame;
