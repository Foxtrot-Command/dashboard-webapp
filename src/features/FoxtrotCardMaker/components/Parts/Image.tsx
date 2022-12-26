type Props = {
  id: string;
  image: string;
};

export const Image = ({ id, image }: Props) => (
  <>
    <defs>
      <clipPath id="image-path">
        <path
          d="M 64.967 54.941 L 61.821 1065.01 L 101.154 1035 L 267.925 1045 L 291.525 1050 L 444.136 1080 L 480 1045 L 651.814 1040 L 673.84 1000 L 672.267 47.075 L 66.541 48.648"
          fill="none"
          stroke="#000000"
          strokeWidth={10}
        />
      </clipPath>
    </defs>
    <image
      id={id}
      type="MSBitmapLayer"
      x={100}
      y={0}
      width={580}
      height={1100}
      href={
        !image ? "/images/generators/cards/backgrounds/base_card.png" : image
      }
      clipPath={"url(#image-path)"}
    />
    ;
  </>
);
export default Image;
