
export const Image = ({ id, image, clip }) =>
    <>
        <defs>
            <clipPath id="image-path">
                <rect id="card-clip" x="100" width="600" height="1100" />
            </clipPath>

        </defs>

        <image
            id={id}
            type="MSBitmapLayer"
            x="100"
            y="0"
            width="580"
            height="1100"
            href={image}
            clipPath={"url(#image-path)"}
        />;
    </>
export default Image;