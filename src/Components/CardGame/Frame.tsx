import { BottomRectangle, TopRectangle } from './RectangleElements'

export const Frame = ({ image = '/images/parts/frames/uncommon/bushido.png' }) => (
    <>
        <TopRectangle />
        <BottomRectangle />
        <image
            id="mNeutral"
            type="MSBitmapLayer"
            x="0"
            y="0"
            width="764"
            height="1100"
            href={image}
        />;
    </>
)

export default Frame