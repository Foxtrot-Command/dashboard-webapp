export const Image = ({ id, image, clip }) =>
    <image
        id={id}
        type="MSBitmapLayer"
        x="100"
        y="0"
        width="580"
        height="1100"
        href={image}
        clipPath={clip && "url(#image-clip-path)"}
    />;
export default Image;