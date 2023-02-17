type Props = {
  image: string;
};

export const Frame = ({
  image = "/images/parts/frames/uncommon/bushido.png",
}: Props) => (
  <image
    id="mNeutral"
    type="MSBitmapLayer"
    x={5}
    y={29}
    width={763}
    height={1050}
    href={image}
  />
);

export default Frame;
