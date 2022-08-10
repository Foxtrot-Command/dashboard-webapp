import { BottomRectangle, TopRectangle } from './Misc/RectangleElements'
import { LeftLine, RightLine } from './Misc/TriangleLinesElements'

export const Frame = ({ image = '/images/parts/frames/uncommon/bushido.png' }) => (
    <>
        <TopRectangle />
        <BottomRectangle />
        {/* <LeftLine/>
        <RightLine/> */}
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