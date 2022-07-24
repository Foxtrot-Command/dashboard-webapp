export const CardWrapper = ({ children, id = 'card-svg' }) =>
    <svg style={{ width: "100%", height: "100%", userSelect: "none" }} id={id} viewBox="0 0 769 1120">
        <defs>
        </defs>
        <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
            type="MSPage"
        >
            <g
                id="Card"
                type="MSLayerGroup"
                transform="translate(0.000000, 0.000000)"
            >
                {children}
            </g>
        </g>
    </svg>;

export default CardWrapper;